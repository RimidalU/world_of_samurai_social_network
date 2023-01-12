import React from 'react'

import UserProfile from '../../layouts/UserProfile/UserProfile'
import UserPosts from '../../layouts/UserPosts/UserPosts'

// import styles from './ProfilePage.module.css'

const ProfilePage = ({ state, dispatch }) => {
  return (
    <>
      <UserProfile />
      <UserPosts state={state} dispatch={dispatch} />
    </>
  )
}

export default ProfilePage