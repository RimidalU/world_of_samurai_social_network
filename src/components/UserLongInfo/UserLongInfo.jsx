import React from 'react'
import { NavLink } from 'react-router-dom'

import subscriptionsAPI from '../../api/subscriptionsAPI'

import unknownAvatar from '../../assets/images/unknown_avatar.png'
import Button from '../Button/Button'
import styles from './UserLongInfo.module.css'

const UserLongInfo = ({ name, id, location = 'undefined', status, photos, followed, followUser, unFollowUser }) => {

  const defaultStatus = 'To act for the sake of Man...'    //TODO: implement location in my backend
  //TODO: implement name and status tooltip

  const follow = () => {
    subscriptionsAPI.subscribeToUser(id)
      .then(data => {
        if (data.resultCode === 0) {
          followUser(id)
        }
      })
  }

  const unFollow = () => {
    subscriptionsAPI.unfollowUser(id)
      .then(data => {
        if (data.resultCode === 0) {
          unFollowUser(id)
        }
      })
  }

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
          <Button onClick={unFollow}>{'Unfollow'}</Button> :
          <Button onClick={follow}>{'Follow'}</Button>}
      </div>
    </div>

  )
}

export default UserLongInfo