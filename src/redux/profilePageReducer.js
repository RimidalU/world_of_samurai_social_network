import { ADD_POST, UPDATE_POST } from './actions'
import { getDateNowInString } from '../helpers'
import initialState from './initialState'

const profilePageReducer = (state = initialState.profilePage, action) => {

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

  switch (action.type) {
    case ADD_POST:
      return addPost()
    case UPDATE_POST:
      return updatePost(action.newNote)
    default:
      return state
  }
}

export default profilePageReducer