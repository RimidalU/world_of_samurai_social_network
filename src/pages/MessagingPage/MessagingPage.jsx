import React from 'react'

import Correspondence from '../../components/Correspondence/Correspondence'
import Dialogs from '../../components/Dialogs/Dialogs'

import styles from './MessagingPage.module.css'

const MessagingPage = () => {
  return (
    <div className={styles.wrapper}>
      <Dialogs />
      <Correspondence />
    </div >
  )
}

export default MessagingPage