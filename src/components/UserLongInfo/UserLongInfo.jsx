import React from 'react'

import unknownAvatar from '../../assets/images/unknown_avatar.png'
import Button from '../Button/Button'
import styles from './UserLongInfo.module.css'

const UserLongInfo = ({ avatar = unknownAvatar, fullName, id, location, status, followed, followUser, unFollowUser }) => {
  const defaultStatus = 'To act for the sake of Man...'
  return (
    <>
      <img src={avatar} alt='user avatar' className={styles.avatar} />
      <div className={styles.wrapper}>
        <span className={styles.name}>{fullName}</span>
        <span className={styles.status}>{status ?? defaultStatus}</span>
      </div>
      <div className={styles.button}>
        {followed ?
          <Button onClick={() => unFollowUser(id)}>{'Unfollow'}</Button> :
          <Button onClick={() => followUser(id)}>{'Follow'}</Button>}
      </div>
      <div className={styles.location}>{`${location.cityName}, ${location.country}`}</div>
    </>
  )
}

export default UserLongInfo