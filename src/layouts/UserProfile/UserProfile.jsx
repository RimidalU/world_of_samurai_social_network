import React from 'react'

import ProfileAvatar from '../../assets/images/unknown_avatar.png'
import ProfileBackground from '../../assets/images/default_wallpaper.jpg'
import Button from '../../components/Button/Button'

import styles from './UserProfile.module.css'
import ProfileStatus from '../../components/ProfileStatus/ProfileStatus'

const UserProfile = ({ userProfile, followed }) => {
  const { userId, aboutMe, fullName, photos, lookingForAJobDescription } = userProfile

  const unFollowUser = (userId) => {
    console.log(`No implementation 'unFollowUser' for userId:${userId}`) //TODO: add implement unFollowUser and followUser
  }
  const followUser = (userId) => {
    console.log(`No implementation 'followUser' for userId:${userId}`)  //TODO: add 'open to work' badge
  }

  return (
    <section>
      <article>
        <div>
          <img src={ProfileBackground} alt='background header of profile' className={styles.background} />
        </div>
        <div>
          <img src={photos.large ?? ProfileAvatar} alt='user avatar' className={styles.avatar} />
        </div>
      </article>

      <article>
        <div className={styles.user} >
          <div className={styles.wrapper}>
            <span className={styles.name}>{fullName}</span>
            <ProfileStatus aboutMe={aboutMe}/>
            <span className={styles.status}>{`Dream work: ${lookingForAJobDescription ?? ''}`}</span>
          </div>
          <div className={styles.button}>
            {followed ?
              <Button onClick={() => unFollowUser(userId)}>{'Unfollow'}</Button> :
              <Button onClick={() => followUser(userId)}>{'Follow'}</Button>}
          </div>
        </div>

      </article>
    </section>
  )
}

export default UserProfile