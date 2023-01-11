import React from 'react'

import Correspondence from '../../components/Correspondence/Correspondence'
import Dialogs from '../../components/Dialogs/Dialogs'

import styles from './MessagingPage.module.css'

const MessagingPage = ({ state, addMessageToState, updateMessageText }) => {
  return (
    <div className={styles.wrapper}>
      <Dialogs penfriends={state.penfriends} />
      <Correspondence correspondence={state.correspondence} newMessageText={state.newMessageText} addMessageToState={addMessageToState} updateMessageText={updateMessageText} />
    </div >
  )
}

export default MessagingPage