import React from 'react'

import UserInfo from '../layouts/UserProfile'
import UserPosts from '../layouts/UserPosts'

const ProfilePage = () => {
  return (
    <main className='main'>
      <UserInfo />
      <UserPosts />
    </main>
  )
}

export default ProfilePage