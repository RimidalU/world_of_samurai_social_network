import React from 'react'

import Message from '../Message/Message'

import styles from './UsersSet.module.css'

const UsersSet = ({ users }) => {

  return (
    <ul className={styles.wrapper}>
      {
        users.map(user => (
          <li key={user.id} className={styles.user}>
            <Message {...user} />
          </li>
        ))
      }
    </ul >
  )
}

export default UsersSet