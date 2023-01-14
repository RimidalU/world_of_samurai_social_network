import React from 'react'

import Correspondence from '../../components/Correspondence/Correspondence'
import Penfriends from '../../components/Penfriends/Penfriends'

import styles from './MessagingPage.module.css'

const MessagingPage = (store) => {
  return (
    <div className={styles.wrapper}>
      <Penfriends store={store}/>
      <Correspondence store={store} />
    </div >
  )
}

export default MessagingPage
