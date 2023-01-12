import React from 'react'
import AddNote from '../../layouts/AddNote/AddNote'

import Message from '../Message/Message'

import styles from './Correspondence.module.css'

const Correspondence = ({ state, dispatch }) => {
  return (
    <div className={styles.wrapper}>
      <AddNote componentType='message' dispatch={dispatch} newNoteText={state.newMessageText} />
      <ul className={styles.dialogs}>
        {
          state.correspondence.map(message => (
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