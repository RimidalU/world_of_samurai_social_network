import React from 'react'

import likeIcon from '../../assets/images/like.png'
import styles from './Post.module.css'

const Post = ({ message, date, likeCount = 0 }) => {

  const timeElapsed = Date.now()
  const today = new Date(timeElapsed).toDateString()

  return (
    <>
      <div className={styles.date}>{date ?? today}</div>
      <span >{message}</span>
      <div className={styles.likeWrapper}>
        <img src={likeIcon} alt='like icon' className={styles.likeIcon} />
        <span>{likeCount}</span>
      </div>
    </>
  )
}

export default Post