import { ADD_POST, UPDATE_POST, SET_USER_PROFILE } from '../actions/profilePageActions'
import profilePageInitialState from '../initialStates/profilePageInitialState'
import { getDateNowInString } from '../../helpers'

const profilePageReducer = (state = profilePageInitialState, action) => {

  const addPost = () => {
    const today = getDateNowInString()
    const postsLength = state.posts.length
    const newPost = {
      id: postsLength + 1,
      message: state.newPostText,
      date: today,
      likeCount: 0
    }
    return {
      ...state,
      posts: [...state.posts, newPost]
    }
  }

  const updatePost = (newNote) => {
    return {
      ...state,
      newPostText: newNote
    }
  }

  const setUserProfile = (userProfile) => {
    return {
      ...state, userProfile
    }
  }

  switch (action.type) {
    case ADD_POST:
      return addPost()
    case UPDATE_POST:
      return updatePost(action.newNote)
    case SET_USER_PROFILE:
      return setUserProfile(action.userProfile)
    default:
      return state
  }
}

export default profilePageReducer