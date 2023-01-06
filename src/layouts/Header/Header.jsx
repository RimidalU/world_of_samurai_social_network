import React from 'react'

import LogoIcon from '../../assets/images/logo_samurai.png'

import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={LogoIcon} alt='logo samurai' className={styles.logo} />
      <h1>
        Social Network WofS
      </h1>
    </header>
  )
}

export default Header