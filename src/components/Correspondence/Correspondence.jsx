import React from 'react'
import AddPost from '../../layouts/AddPost/AddPost'

import Message from '../Message/Message'

import styles from './Correspondence.module.css'

const Correspondence = ({ correspondence, addMessageToState, updateMessageText, newMessageText }) => {
  return (
    <div className={styles.wrapper}>
      <AddPost addPostToState={addMessageToState} updatePostText={updateMessageText} newPostText={newMessageText} />
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