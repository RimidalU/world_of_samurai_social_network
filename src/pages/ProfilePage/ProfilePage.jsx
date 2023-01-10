import React from 'react'

import UserProfile from '../../layouts/UserProfile/UserProfile'
import UserPosts from '../../layouts/UserPosts/UserPosts'

// import styles from './ProfilePage.module.css'

const ProfilePage = ({ state }) => {
  return (
    <>
      <UserProfile />
      <UserPosts posts={state.posts} />
    </>
  )
}

export default ProfilePage