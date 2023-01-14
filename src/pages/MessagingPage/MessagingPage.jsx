import React from 'react'

import Correspondence from '../../components/Correspondence/Correspondence'
import Penfriends from '../../components/Penfriends/Penfriends'
import { StoreContext } from '../../StoreContext'

import styles from './MessagingPage.module.css'

const MessagingPage = () => {

  return (
    <div className={styles.wrapper}>

      <StoreContext.Consumer>
        {(store) => {
          const penfriends = store.getState().messagingPage.penfriends

          return <Penfriends penfriends={penfriends} />
        }}
      </StoreContext.Consumer>

      <Correspondence />
    </div >
  )
}

export default MessagingPage
