import React from 'react'

import UserProfile from '../../layouts/UserProfile/UserProfile'
import UserPosts from '../../layouts/UserPosts/UserPosts'

import styles from './ProfilePage.module.css'

const ProfilePage = () => {
  return (
    <main className={styles.main}>
      <UserProfile />
      <UserPosts />
    </main>
  )
}

export default ProfilePage