import React from 'react'

import Dialogs from '../../components/Dialogs/Dialogs'
import Message from '../../components/Message/Message'

import styles from './MessagingPage.module.css'

const MessagingPage = () => {
  return (
    <div className={styles.wrapper}>
      <Dialogs />
      <ul>
        <li>
          <Message message='Hey! How are you?' />
        </li>
        <li>
          <Message message="Thank you. I'm fine." />
        </li>
        <li>
          <Message message="What's the latest news?" />
        </li>
        <li>
          <Message message='Grass in the yard, firewood on the grass' />
        </li>
      </ul>
    </div >
  )
}

export default MessagingPage