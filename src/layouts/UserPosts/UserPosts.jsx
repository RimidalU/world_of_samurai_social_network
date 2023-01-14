import React from 'react'

import PostsSet from '../../components/PostsSet/PostsSet'

import styles from './UserPosts.module.css'
import AddNoteContainer from '../AddNote/AddNoteContainer'

function UserPosts({ store }) {
  const posts = store.getState().profilePage.posts
  return (
    <section className={styles.wrapper}>
      <AddNoteContainer componentType='post' store={store} />
      <PostsSet posts={posts} />
    </section>
  )
}

export default UserPosts