import React from 'react'

import unknownAvatar from '../../assets/images/unknown_avatar.png'
import styles from './Post.module.css'

const Post = () => {
  return (
    <li className={styles.wrapper}>
      <img src={unknownAvatar} alt='user avatar' className={styles.avatar} />
      <span >Post 1</span>
    </li>
  )
}

export default Post