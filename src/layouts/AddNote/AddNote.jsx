import React from 'react'

import Button from '../../components/Button/Button'
import Textarea from '../../components/Textarea/Textarea'

import { ADD_MESSAGE, ADD_POST, UPDATE_MESSAGE, UPDATE_POST } from '../../handmadeRedux/actions'

import styles from './AddNote.module.css'

const AddNote = ({ componentType, newNoteText, dispatch }) => {
  const textarea = React.createRef()

  let addNoteAction, updateNoteAction

  switch (componentType) {
    case 'post':
      addNoteAction = ADD_POST
      updateNoteAction = UPDATE_POST
      break
    default:
      addNoteAction = ADD_MESSAGE
      updateNoteAction = UPDATE_MESSAGE
      break
  }


  function createNote() {
    dispatch({ type: addNoteAction })
    removeNote()
  }

  function removeNote() {
    dispatch(
      {
        type: updateNoteAction,
        newNote: ''
      }
    )
  }

  function changeNoteText() {
    dispatch(
      {
        type: updateNoteAction,
        newNote: textarea.current.value
      }
    )
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