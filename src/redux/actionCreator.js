import { ADD_POST, ADD_MESSAGE, UPDATE_POST, UPDATE_MESSAGE } from './actions'

export const addPost = () => ({ type: ADD_POST })
export const addMessage = () => ({ type: ADD_MESSAGE })
export const updatePost = (newNote) => (
  {
    type: UPDATE_POST,
    newNote
  }
)
export const updateMessage = (newNote) => (
  {
    type: UPDATE_MESSAGE,
    newNote
  }
)
