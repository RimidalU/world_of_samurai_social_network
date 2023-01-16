import React from 'react'

import Button from '../../components/Button/Button'
import Textarea from '../../components/Textarea/Textarea'

import styles from './AddNote.module.css'

const AddNote = ({ addNote, changeNote, removeNote, newNoteText }) => {
  const textarea = React.createRef()

  function createNote() {
    addNote()
    // removeNote()
  }

  function clearNote() {
    removeNote()
  }

  function changeNoteText() {
    changeNote(textarea.current.value)
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
        <Button onClick={clearNote} >
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