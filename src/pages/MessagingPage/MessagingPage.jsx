import React from 'react'

import Correspondence from '../../components/Correspondence/Correspondence'
import PenfriendsContainer from '../../components/Penfriends/PenfriendsContainer'

import styles from './MessagingPage.module.css'

const MessagingPage = () => {
  return (
    <div className={styles.wrapper}>
      <PenfriendsContainer />
      <Correspondence />
    </div >
  )
}

export default MessagingPage
