import React from 'react'

import { getDateNowInString } from '../../helpers'

import likeIcon from '../../assets/images/like.png'
import styles from './Post.module.css'

const Post = ({ message, date, likeCount = 0 }) => {
  const today = getDateNowInString()
  return (
    <>
      <div className={styles.date}>{date ?? today}</div>
      <span className={styles.message}>{message}</span>
      <div className={styles.likeWrapper}>
        <img src={likeIcon} alt='like icon' className={styles.likeIcon} />
        <span>{likeCount}</span>
      </div>
    </>
  )
}

export default Post