import React from 'react'

import Correspondence from '../../components/Correspondence/Correspondence'
import Dialogs from '../../components/Dialogs/Dialogs'

import styles from './MessagingPage.module.css'

const MessagingPage = ({ state, dispatch }) => {
  return (
    <div className={styles.wrapper}>
      <Dialogs penfriends={state.penfriends} />
      <Correspondence state={state} dispatch={dispatch} />
    </div >
  )
}

export default MessagingPage