import React from 'react'

import UserInfo from '../layouts/UserProfile'
import UserPosts from '../layouts/UserPosts'

import styles from './ProfilePage.module.css'

const ProfilePage = () => {
  return (
    <main className={styles.main}>
      <UserInfo />
      <UserPosts />
    </main>
  )
}

export default ProfilePage