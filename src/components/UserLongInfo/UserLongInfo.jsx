import React from 'react'
import { NavLink } from 'react-router-dom'

import unknownAvatar from '../../assets/images/unknown_avatar.png'
import Button from '../Button/Button'
import styles from './UserLongInfo.module.css'

const UserLongInfo = ({ name, id, location = 'undefined', status, photos, followed, followUser, unFollowUser }) => {

  const defaultStatus = 'To act for the sake of Man...'    //TODO: implement location in my backend
                                                           //TODO: implement name and status tooltip
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
          <Button onClick={() => unFollowUser(id)}>{'Unfollow'}</Button> :
          <Button onClick={() => followUser(id)}>{'Follow'}</Button>}
      </div>
    </div>

  )
}

export default UserLongInfo