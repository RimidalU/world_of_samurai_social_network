import React, { useContext } from 'react'

import { addPost, updatePost } from '../../handmadeRedux/actionCreator'
import { StoreContext } from '../../StoreContext'
import AddNote from './AddNote'

const AddPostContainer = () => {

  const store = useContext(StoreContext)
  let newNoteText = store.getState().profilePage.newPostText

  function addNote() {
    store.dispatch(addPost())
    removeNote()
  }

  function removeNote() {
    store.dispatch(updatePost(''))
  }

  function changeNote(noteText) {
    store.dispatch(updatePost(noteText))
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

export default AddPostContainer