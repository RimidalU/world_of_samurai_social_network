import React from 'react'
import { NavLink } from 'react-router-dom'

import LogoIcon from '../../assets/images/logo_samurai.png'

import styles from './Header.module.css'

const Header = ({ isAuth, login }) => {
  return (
    <header className={styles.header}>
      <img src={LogoIcon} alt='logo samurai' className={styles.logo} />
      <h1>
        Social Network WofS
      </h1>
      <div className={styles.loginWrapper}>
        {isAuth ? <NavLink to={'/profile'}>{login}</NavLink> :
          <NavLink to={'/login'}>Login</NavLink>
        }
      </div>
    </header>
  )
}

export default Header