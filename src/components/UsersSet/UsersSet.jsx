import React from 'react'

import UserLongInfo from '../UserLongInfo/UserLongInfo'

import styles from './UsersSet.module.css'

const UsersSet = ({ users, followUser, unFollowUser }) => {
  return (
    <ul className={styles.wrapper}>
      {
        users.map(user => (
          <li key={user.id} className={styles.user}>
            <UserLongInfo {...user} followUser={followUser} unFollowUser={unFollowUser} />
          </li>
        ))
      }
    </ul >
  )
}

export default UsersSet