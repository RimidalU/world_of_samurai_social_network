import React from 'react'

import ProfileAvatar from '../assets/images/default_avatar.jpg'
import ProfileBackground from '../assets/images/default_wallpaper.jpg'

const UserProfile = () => {
  return (
    <section>
      <article>
        <div>
          <img src={ProfileBackground} alt='background header of profile' width='1200' />
        </div>
        <div>
          <img src={ProfileAvatar} alt='user avatar' width='200'
            style={{
              borderRadius: '50%', border: '5px solid white',
              boxShadow: '0 0 50px #f39845', left: '35px', position: 'relative', marginTop: '-170px'
            }}
          />
        </div>
      </article>

      <article>
        information about user
      </article>
    </section>
  )
}

export default UserProfile