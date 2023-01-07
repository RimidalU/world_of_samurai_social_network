import React from 'react'
import { NavLink } from 'react-router-dom'


import styles from './MenuSidebar.module.css'

const activeStyle = ({ isActive }) => ({ color: isActive ? 'var(--danger)' : 'var(--primary)' })

const MenuSidebar = () => {
  return (
    <aside className={styles.aside}>
      <nav>
        <ul className={styles.links}>
          <li>
            <NavLink to="/" style={activeStyle}>Profile</NavLink>
          </li>
          <li>
            <NavLink to="/messaging" style={activeStyle}>Messaging</NavLink>
          </li>
          <li>
            <NavLink to="/news" style={activeStyle}>News</NavLink>
          </li>
          <li>
            <NavLink to="/music" style={activeStyle}>Music</NavLink>
          </li>
          <li>
            <NavLink to="/settings" style={activeStyle}>Settings</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default MenuSidebar