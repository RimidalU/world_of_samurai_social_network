import React from 'react'

import styles from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <aside className={styles.aside}>
      <nav>
        <ul>
          <li>Profile</li>
          <li>Messages</li>
          <li>News</li>
          <li>Music</li>
          <li>Settings</li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar