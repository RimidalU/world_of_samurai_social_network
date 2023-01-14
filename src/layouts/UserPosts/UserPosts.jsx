import React from 'react'

import PostsSet from '../../components/PostsSet/PostsSet'

import styles from './UserPosts.module.css'
import AddNoteContainer from '../AddNote/AddNoteContainer'
import { StoreContext } from '../../StoreContext'

function UserPosts() {
  return (
    <section className={styles.wrapper}>
      <AddNoteContainer componentType='post' />

      <StoreContext.Consumer >
        {(store) => {
          const posts = store.getState().profilePage.posts
          return <PostsSet posts={posts} />
        }}
      </StoreContext.Consumer>

    </section>
  )
}

export default UserPosts