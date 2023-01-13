import React from 'react'

import Button from '../../components/Button/Button'
import Textarea from '../../components/Textarea/Textarea'
import { addPost, addMessage, updatePost, updateMessage } from '../../handmadeRedux/actionCreator'

import styles from './AddNote.module.css'

const AddNote = ({ componentType, newNoteText, dispatch }) => {
  const textarea = React.createRef()

  let addActionCreator, updateActionCreator

  switch (componentType) {
    case 'post':
      addActionCreator = addPost
      updateActionCreator = updatePost
      break
    default:
      addActionCreator = addMessage
      updateActionCreator = updateMessage
      break
  }


  function createNote() {
    dispatch(addActionCreator())
    removeNote()
  }

  function removeNote() {
    dispatch(updateActionCreator(''))
  }

  function changeNoteText() {
    dispatch(updateActionCreator(textarea.current.value))
  }

  return (
    <form className={styles.wrapper}>
      <Textarea
        refer={textarea}
        placeholder='Add thought'
        id='AddNote'
        value={newNoteText}
        onChange={changeNoteText}
      />
      <span className={styles.buttonWrapper}>
        <Button onClick={removeNote} >
          Erase stupidity
        </Button>
        <Button onClick={createNote}>
          Declare wisdom
        </Button>
      </span>
    </form>
  )
}

export default AddNote