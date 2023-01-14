import React from 'react'

import { addPost, addMessage, updatePost, updateMessage } from '../../handmadeRedux/actionCreator'
import { StoreContext } from '../../StoreContext'
import AddNote from './AddNote'

const AddNoteContainer = ({ componentType }) => {

  return (
    <StoreContext.Consumer >
      {(store) => {

        let addActionCreator, updateActionCreator, newNoteText
        let state = store.getState()

        switch (componentType) {
          case 'post':
            addActionCreator = addPost
            updateActionCreator = updatePost
            newNoteText = state.profilePage.newPostText
            break
          default:
            addActionCreator = addMessage
            updateActionCreator = updateMessage
            newNoteText = state.messagingPage.newMessageText
            break
        }

        function addNote() {
          store.dispatch(addActionCreator())
          removeNote()
        }

        function removeNote() {
          store.dispatch(updateActionCreator(''))
        }

        function changeNote(noteText) {
          store.dispatch(updateActionCreator(noteText))
        }

        return (<AddNote changeNote={changeNote} addNote={addNote} newNoteText={newNoteText} removeNote={removeNote} />)
      }}
    </StoreContext.Consumer >
  )
}

export default AddNoteContainer