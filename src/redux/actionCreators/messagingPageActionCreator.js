import { ADD_MESSAGE, UPDATE_MESSAGE } from '../actions/messagingPageActions'

export const addMessage = () => ({ type: ADD_MESSAGE })

export const updateMessage = (newNote) => (
  {
    type: UPDATE_MESSAGE,
    newNote
  }
)
