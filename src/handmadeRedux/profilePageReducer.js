import { ADD_POST, UPDATE_POST } from './actions'
import { getDateNowInString } from '../helpers'
import initialState from '../redux/initialState'

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
    state.posts.push(newPost)
  }
  const updatePost = (newNote) => {
    state.newPostText = newNote
  }

  switch (action.type) {
    case ADD_POST:
      addPost()
      return state
    case UPDATE_POST:
      updatePost(action.newNote)
      return state
    default:
      return state
  }
}

export default profilePageReducer