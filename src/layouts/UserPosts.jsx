import React from 'react'

import AddPost from './AddPost'
import Post from '../components/Post'

// import styles from './UserPosts.module.css'

const UserPosts = () => {
  return (
    <section>
      posts
      <AddPost />
      <div>
        posts
        <ul>
          <Post />
          <Post />
          <Post />
        </ul>
      </div>
    </section>
  )
}

export default UserPosts