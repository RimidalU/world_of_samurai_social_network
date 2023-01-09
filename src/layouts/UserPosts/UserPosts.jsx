import React from 'react'

import AddPost from '../AddPost/AddPost'
import PostsSet from '../../components/PostsSet/PostsSet'

import styles from './UserPosts.module.css'

function UserPosts({ posts }) {
  return (
    <section className={styles.wrapper}>
      <AddPost />
      <PostsSet posts={posts} />
    </section>
  )
}

export default UserPosts