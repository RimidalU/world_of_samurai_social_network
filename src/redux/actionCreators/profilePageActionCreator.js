import { ADD_POST, UPDATE_POST, SET_USER_PROFILE } from '../actions/profilePageActions'

export const addPost = () => ({ type: ADD_POST })

export const updatePost = (newNote) => (
  {
    type: UPDATE_POST,
    newNote
  }
)
export const setUserProfile = (userProfile) => (
  {
    type: SET_USER_PROFILE,
    userProfile
  }
)
