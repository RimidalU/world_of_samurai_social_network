import React from 'react'

import styles from './UserPosts.module.css'
import AddPostContainer from '../AddNote/AddPostContainer'
import PostsSetContainer from '../../components/PostsSet/PostsSetContainer'

function UserPosts() {

  return (
    <section className={styles.wrapper}>
      <AddPostContainer />
      <PostsSetContainer />
    </section>
  )
}

export default UserPosts