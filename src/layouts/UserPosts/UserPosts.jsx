import React from 'react'

import AddPost from '../AddPost/AddPost'
import PostsSet from '../../components/PostsSet/PostsSet'

import styles from './UserPosts.module.css'

function UserPosts({ store }) {
  let { addPostToState, updatePostText, getPosts, getNewPostText } = store
  return (
    <section className={styles.wrapper}>
      <AddPost addPostToState={addPostToState.bind(store)} updatePostText={updatePostText.bind(store)} newPostText={getNewPostText.bind(store)} />
      <PostsSet posts={getPosts.bind(store)} />
    </section>
  )
}

export default UserPosts