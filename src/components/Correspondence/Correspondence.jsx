import React from 'react'
import AddNoteContainer from '../../layouts/AddNote/AddNoteContainer'

import Message from '../Message/Message'

import styles from './Correspondence.module.css'

const Correspondence = ({store}) => {
  const correspondence = store.getState().messagingPage.correspondence
  return (
    <div className={styles.wrapper}>
      <AddNoteContainer componentType='message' store={store} />
      <ul className={styles.dialogs}>
        {
          correspondence.map(message => (
            <li key={message.id} className={styles.messageWrapper}>
              <Message {...message} />
            </li>
          ))
        }
      </ul >
    </div>

  )
}

export default Correspondence