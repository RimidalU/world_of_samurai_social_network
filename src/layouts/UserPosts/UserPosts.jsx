import React from 'react'

import AddNote from '../AddNote/AddNote'
import PostsSet from '../../components/PostsSet/PostsSet'

import styles from './UserPosts.module.css'

function UserPosts({ state, dispatch }) {
  return (
    <section className={styles.wrapper}>
      <AddNote componentType='post' dispatch={dispatch} newNoteText={state.newPostText} />
      <PostsSet posts={state.posts} />
    </section>
  )
}

export default UserPosts