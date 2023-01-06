import React from 'react'

import ProfileAvatar from '../../assets/images/default_avatar.jpg'
import ProfileBackground from '../../assets/images/default_wallpaper.jpg'

import styles from './UserProfile.module.css'

const UserProfile = () => {
  return (
    <section>
      <article>
        <div>
          <img src={ProfileBackground} alt='background header of profile' className={styles.background} />
        </div>
        <div>
          <img src={ProfileAvatar} alt='user avatar' className={styles.avatar} />
        </div>
      </article>

      <article>
        information about user
      </article>
    </section>
  )
}

export default UserProfile