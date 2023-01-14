import React from 'react'

import Correspondence from '../../components/Correspondence/Correspondence'
import Dialogs from '../../components/Dialogs/Dialogs'

import styles from './MessagingPage.module.css'

const MessagingPage = ({ store }) => {
  return (
    <div className={styles.wrapper}>
      <Dialogs store={store} />
      <Correspondence store={store} />
    </div >
  )
}

export default MessagingPage
