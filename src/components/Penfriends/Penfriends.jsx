import React from 'react'

import { Navigate, NavLink } from 'react-router-dom'

import UserShortInfo from '../UserShortInfo/UserShortInfo'

import styles from './Penfriends.module.css'

const Penfriends = ({penfriends, isAuth}) => {

  if(!isAuth) return <Navigate to={'/login'}/>

  return (
    <ul className={styles.wrapper}>
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

export default Penfriends