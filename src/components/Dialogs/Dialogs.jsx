import React from 'react'

import { NavLink } from 'react-router-dom'

import UserShortInfo from '../UserShortInfo/UserShortInfo'

import styles from './Dialogs.module.css'

const Dialogs = ({ penfriends }) => {
  return (
    <ul className={styles.dialogs}>
      {
        penfriends.map(friend => (
          <li key={friend.id}>
            <NavLink to={`/messaging/${friend.id}`}>
              <UserShortInfo {...friend} />
            </NavLink>
          </li>
        ))
      }
    </ul >
  )
}

export default Dialogs