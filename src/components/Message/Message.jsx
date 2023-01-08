import React from 'react'

import unknownAvatar from '../../assets/images/unknown_avatar.png'
import styles from './Message.module.css'

const Message = () => {
  return (
    <li className={styles.wrapper}>
      <img src={unknownAvatar} alt='user avatar' className={styles.avatar} />
      <span className={styles.message}>Message sdfsfds safds 2323</span>
    </li>
  )
}

export default Message