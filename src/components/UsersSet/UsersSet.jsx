import React from 'react'
import axios from 'axios'

import UserLongInfo from '../UserLongInfo/UserLongInfo'

import styles from './UsersSet.module.css'

const UsersSet = ({ users, followUser, unFollowUser, setUsers }) => {

  let getUsers = () => {
    if (users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users/?page=2200')
        .then(response => {
          setUsers(response.data.items)
        })
    }
  }

  return (
    <ul className={styles.wrapper}>
      <button onClick={getUsers}>GetUsers</button>
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