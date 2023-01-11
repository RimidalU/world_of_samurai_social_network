import React from 'react'

import AddPost from '../AddPost/AddPost'
import PostsSet from '../../components/PostsSet/PostsSet'

import styles from './UserPosts.module.css'

function UserPosts({ posts, addPostToState, newPostText, updatePostText }) {
  return (
    <section className={styles.wrapper}>
      <AddPost addPostToState={addPostToState} newPostText={newPostText} updatePostText={updatePostText} />
      <PostsSet posts={posts} />
    </section>
  )
}

export default UserPosts