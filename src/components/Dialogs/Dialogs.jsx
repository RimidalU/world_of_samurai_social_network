import React from 'react'

import { NavLink } from 'react-router-dom'

import UserShortInfo from '../UserShortInfo/UserShortInfo'

import styles from './Dialogs.module.css'

const fakeUsers = [
  {
    id: 1,
    name: 'Den',
    avatar: `${require('../../assets/images/default_avatar.jpg')}`
  },
  {
    id: 2,
    name: 'Bob',
    avatar: `${require('../../assets/images/samurai_2.jpg')}`
  },
  {
    id: 3,
    name: 'Carolina',
    avatar: `${require('../../assets/images/geisha.jpg')}`
  },
  {
    id: 4,
    name: 'Emma',
    avatar: `${require('../../assets/images/geisha2.jpg')}`
  },
  {
    id: 5,
    name: 'John Doe'
  },
]

const Dialogs = () => {
  return (
    <ul className={styles.dialogs}>
      {
        fakeUsers.map(user => (
          <li key={user.id}>
            <NavLink to={`/messaging/${user.id}`}>
              <UserShortInfo {...user} />
            </NavLink>
          </li>
        ))
      }
    </ul >
  )
}

export default Dialogs