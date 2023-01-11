import React from 'react'

import UserProfile from '../../layouts/UserProfile/UserProfile'
import UserPosts from '../../layouts/UserPosts/UserPosts'

// import styles from './ProfilePage.module.css'

const ProfilePage = ({ state, addPostToState, updatePostText }) => {
  return (
    <>
      <UserProfile />
      <UserPosts posts={state.posts} newPostText={state.newPostText} addPostToState={addPostToState} updatePostText={updatePostText} />
    </>
  )
}

export default ProfilePage