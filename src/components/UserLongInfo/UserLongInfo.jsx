import React from 'react'
import { NavLink } from 'react-router-dom'

import unknownAvatar from '../../assets/images/unknown_avatar.png'
import Button from '../Button/Button'

import styles from './UserLongInfo.module.css'

const UserLongInfo = ({
  name,
  id,
  location = 'undefined',
  status,
  photos,
  followed,
  followingInProgress,
  follow,
  unFollow
}) => {

  const defaultStatus = 'To act for the sake of Man...'    //TODO: implement location in my backend
  //TODO: implement name and status tooltip


  let isDisabled = followingInProgress.some(userId => userId === id)

  return (

    <div className={styles.user} >
      <NavLink to={'/profile/' + id}>
        <img src={photos.small ?? unknownAvatar} alt='user avatar' className={styles.avatar} />
      </NavLink>
      <div className={styles.wrapper}>
        <span className={styles.name}>{name}</span>
        <span className={styles.status}>{status ?? defaultStatus}</span>
      </div>
      {/* {location &&  */}
      <div className={styles.location}>{`${location.cityName}, ${location.country}`}</div>
      {/* } */}
      <div className={styles.button}>
        {followed ?
          <Button isDisabled={isDisabled} onClick={unFollow}>{'Unfollow'}</Button> :
          <Button isDisabled={isDisabled} onClick={follow}>{'Follow'}</Button>}
      </div>
    </div>
  )
}

export default UserLongInfo