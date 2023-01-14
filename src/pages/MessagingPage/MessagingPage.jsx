import React, { useContext } from 'react'

import Correspondence from '../../components/Correspondence/Correspondence'
import Penfriends from '../../components/Penfriends/Penfriends'
import { StoreContext } from '../../StoreContext'

import styles from './MessagingPage.module.css'

const MessagingPage = () => {
  const store = useContext(StoreContext)

  const penfriends = store.getState().messagingPage.penfriends

  return (
    <div className={styles.wrapper}>
      <Penfriends penfriends={penfriends} />
      <Correspondence />
    </div >
  )
}

export default MessagingPage
