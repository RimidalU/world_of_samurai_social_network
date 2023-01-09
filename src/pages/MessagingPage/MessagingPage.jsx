import React from 'react'

import Correspondence from '../../components/Correspondence/Correspondence'
import Dialogs from '../../components/Dialogs/Dialogs'

import styles from './MessagingPage.module.css'

const MessagingPage = ({ penfriends, correspondence }) => {
  return (
    <div className={styles.wrapper}>
      <Dialogs penfriends={penfriends} />
      <Correspondence correspondence={correspondence} />
    </div >
  )
}

export default MessagingPage