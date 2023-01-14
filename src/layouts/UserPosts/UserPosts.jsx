import React, { useContext } from 'react'

import PostsSet from '../../components/PostsSet/PostsSet'

import styles from './UserPosts.module.css'
import AddNoteContainer from '../AddNote/AddNoteContainer'
import { StoreContext } from '../../StoreContext'

function UserPosts() {
  const store = useContext(StoreContext)
  const posts = store.getState().profilePage.posts

  return (
    <section className={styles.wrapper}>
      <AddNoteContainer componentType='post' />
      <PostsSet posts={posts} />
    </section>
  )
}

export default UserPosts