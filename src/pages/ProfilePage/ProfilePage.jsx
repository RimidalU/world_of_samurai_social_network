import React from 'react'

import UserProfile from '../../layouts/UserProfile/UserProfile'
import UserPosts from '../../layouts/UserPosts/UserPosts'

// import styles from './ProfilePage.module.css'

const ProfilePage = () => {
  return (
    <>
      <UserProfile />
      <UserPosts />
    </>
  )
}

export default ProfilePage