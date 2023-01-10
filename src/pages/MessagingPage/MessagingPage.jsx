import React from 'react'

import Correspondence from '../../components/Correspondence/Correspondence'
import Dialogs from '../../components/Dialogs/Dialogs'

import styles from './MessagingPage.module.css'

const MessagingPage = ({ state }) => {
  return (
    <div className={styles.wrapper}>
      <Dialogs penfriends={state.penfriends} />
      <Correspondence correspondence={state.correspondence} />
    </div >
  )
}

export default MessagingPage