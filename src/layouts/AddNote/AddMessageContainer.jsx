import React, { useContext } from 'react'

import { addMessage, updateMessage } from '../../handmadeRedux/actionCreator'
import { StoreContext } from '../../StoreContext'
import AddNote from './AddNote'

const AddMessageContainer = () => {

  const store = useContext(StoreContext)

  let newNoteText = store.getState().messagingPage.newMessageText

  function addNote() {
    store.dispatch(addMessage())
    removeNote()
  }

  function removeNote() {
    store.dispatch(updateMessage(''))
  }

  function changeNote(noteText) {
    store.dispatch(updateMessage(noteText))
  }

  return (
    <AddNote
      changeNote={changeNote}
      addNote={addNote}
      newNoteText={newNoteText}
      removeNote={removeNote}
    />
  )
}

export default AddMessageContainer