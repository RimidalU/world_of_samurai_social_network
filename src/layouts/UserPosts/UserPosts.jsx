import React from 'react'

import AddPost from '../AddPost/AddPost'
import PostsSet from '../../components/PostsSet/PostsSet'

import styles from './UserPosts.module.css'

function UserPosts() {
  return (
    <section className={styles.wrapper}>
      <AddPost />
      <PostsSet />
    </section>
  )
}

export default UserPosts