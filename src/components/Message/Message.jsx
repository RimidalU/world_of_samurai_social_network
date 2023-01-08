import React from 'react'

import unknownAvatar from '../../assets/images/unknown_avatar.png'
import styles from './Message.module.css'

const Message = ({ linkToAvatar = unknownAvatar, message, date }) => {

  const timeElapsed = Date.now()
  const today = new Date(timeElapsed).toDateString()

  return (
    <li className={styles.wrapper}>
      <img src={linkToAvatar} alt='user avatar' className={styles.avatar} />
      <span className={styles.message}>{message}</span>
      <div className={styles.date}>{date ?? today}</div>
    </li>
  )
}

export default Message