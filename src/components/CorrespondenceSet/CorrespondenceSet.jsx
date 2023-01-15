import React from 'react'

import Message from '../Message/Message'

import styles from './CorrespondenceSet.module.css'

const CorrespondenceSet = ({ correspondence }) => {

  return (
    <ul className={styles.wrapper}>
      {
        correspondence.map(message => (
          <li key={message.id} className={styles.message}>
            <Message {...message} />
          </li>
        ))
      }
    </ul >
  )
}

export default CorrespondenceSet