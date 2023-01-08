import React from 'react'

import unknownAvatar from '../../assets/images/unknown_avatar.png'

import styles from './UserShortInfo.module.css'

const UserShortInfo = ({ name, avatar = unknownAvatar }) => {
  return (
    <div className={styles.wrapper}>
      <img src={avatar} alt='user avatar' className={styles.avatar} />
      <span className={styles.user}>{name}</span>
    </div>
  )
}

export default UserShortInfo