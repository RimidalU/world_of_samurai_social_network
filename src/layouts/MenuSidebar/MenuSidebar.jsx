import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './MenuSidebar.module.css'

const MenuSidebar = () => {
  return (
    <aside className={styles.aside}>
      <nav>
        <ul className={styles.links}>
          <li>
            <NavLink to='/'>
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to='/messaging'>
              Messaging
            </NavLink>
          </li>
          <li>
            <NavLink to='/news'>
              News
            </NavLink>
          </li>
          <li>
            <NavLink to='/users'>
              Find User
            </NavLink>
          </li>
          <li>
            <NavLink to='/music'>
              Music
            </NavLink>
          </li>
          <li>
            <NavLink to='/settings'>
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default MenuSidebar