import { ADD_POST, UPDATE_POST } from '../actions/profilePageActions'

export const addPost = () => ({ type: ADD_POST })

export const updatePost = (newNote) => (
  {
    type: UPDATE_POST,
    newNote
  }
)