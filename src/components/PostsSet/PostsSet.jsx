import React from 'react'

import Post from '../Post/Post'

import styles from './PostsSet.module.css'

const PostsSet = ({ posts }) => {

  return (
    <ul className={styles.wrapper}>
      {
        posts.map(post => (
          <li key={post.id} className={styles.post}>
            <Post {...post} />
          </li>
        ))
      }
    </ul >
  )
}

export default PostsSet