import React from 'react'

import styles from './MenuSidebar.module.css'

const MenuSidebar = () => {
  return (
    <aside className={styles.aside}>
      <nav>
        <ul>
          <li>Profile</li>
          <li>Messaging</li>
          <li>News</li>
          <li>Music</li>
          <li>Settings</li>
        </ul>
      </nav>
    </aside>
  )
}

export default MenuSidebar