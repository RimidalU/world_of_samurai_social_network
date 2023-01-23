import { ADD_POST, UPDATE_POST, SET_USER_PROFILE } from '../actions/profilePageActions'
import profileAPI from '../../api/profileAPI'


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

//thunks

export const getProfileThunksCreator = (userId) => {

  return (dispatch) => {
    profileAPI.getProfile(userId)
      .then(data => {
        dispatch(setUserProfile(data))
      })
  }
}