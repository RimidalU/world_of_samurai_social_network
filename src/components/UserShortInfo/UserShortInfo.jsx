import React from 'react'

import unknownAvatar from '../../assets/images/unknown_avatar.png'
import styles from './UserShortInfo.module.css'

const UserShortInfo = ({ linkToAvatar = unknownAvatar, user}) => {
  return (
    <li className={styles.wrapper}>
      <img src={linkToAvatar} alt='user avatar' className={styles.avatar} />
      <span className={styles.user}>{user}</span>
    </li>
  )
}

export default UserShortInfo