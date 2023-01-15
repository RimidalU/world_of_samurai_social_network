import React, { useContext } from 'react'

import PostsSet from '../../components/PostsSet/PostsSet'

import styles from './UserPosts.module.css'
import { StoreContext } from '../../StoreContext'
import AddPostContainer from '../AddNote/AddPostContainer'

function UserPosts() {
  const store = useContext(StoreContext)
  const posts = store.getState().profilePage.posts

  return (
    <section className={styles.wrapper}>
      <AddPostContainer />
      <PostsSet posts={posts} />
    </section>
  )
}

export default UserPosts