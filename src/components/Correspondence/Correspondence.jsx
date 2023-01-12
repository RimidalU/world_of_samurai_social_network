import React from 'react'
import AddPost from '../../layouts/AddPost/AddPost'

import Message from '../Message/Message'

import styles from './Correspondence.module.css'

const Correspondence = ({ store }) => {
  let { addMessageToState, updateMessageText, getNewMessageText, getCorrespondence } = store
  const correspondence = getCorrespondence.bind(store)
  return (
    <div className={styles.wrapper}>
      <AddPost addPostToState={addMessageToState.bind(store)} updatePostText={updateMessageText.bind(store)} newPostText={getNewMessageText.bind(store)} />
      <ul className={styles.dialogs}>
        {
          correspondence().map(message => (
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