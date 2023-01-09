import React from 'react'

import Message from '../Message/Message'

import styles from './Correspondence.module.css'

const Correspondence = ({ correspondence }) => {
  return (
    <ul className={styles.dialogs}>
      {
        correspondence.map(message => (
          <li key={message.id} className={styles.wrapper}>
            <Message {...message} />
          </li>
        ))
      }
    </ul >
  )
}

export default Correspondence