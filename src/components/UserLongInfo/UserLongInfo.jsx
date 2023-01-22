import axios from 'axios'
import React from 'react'
import { NavLink } from 'react-router-dom'

import unknownAvatar from '../../assets/images/unknown_avatar.png'
import Button from '../Button/Button'
import styles from './UserLongInfo.module.css'

const UserLongInfo = ({ name, id, location = 'undefined', status, photos, followed, followUser, unFollowUser }) => {

  const defaultStatus = 'To act for the sake of Man...'    //TODO: implement location in my backend
  //TODO: implement name and status tooltip

  const follow = () => {
    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {},
      {
        withCredentials: true,
        ' API-KEY': '3a85fa12-3a31-4f05-9860-0522a4d39480'
      })
      .then(response => {
        if (response.data.resultCode === 0) {
          followUser(id)
        }
      })
  }

  const unFollow = () => {
    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,
      {
        withCredentials: true,
        ' API-KEY': '3a85fa12-3a31-4f05-9860-0522a4d39480'
      })
      .then(response => {
        if (response.data.resultCode === 0) {
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