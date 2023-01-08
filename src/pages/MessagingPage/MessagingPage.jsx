import React from 'react'
import Message from '../../components/Message/Message'

import styles from './MessagingPage.module.css'

const MessagingPage = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.dialogs}>
        <li>
        User 1
        </li>
        <li className='active'>
        User 2
        </li>
        <li>
        User 3
        </li>
        <li>
        User 4
        </li>
      </ul>
      <ul>
        <li>
        <Message />
        </li>
        <li>
        <Message />
        </li>
        <li>
        <Message />
        </li>
        <li>
        <Message />
        </li>
      </ul>
    </div>
  )
}

export default MessagingPage