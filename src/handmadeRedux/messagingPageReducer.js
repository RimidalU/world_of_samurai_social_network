import { ADD_MESSAGE, UPDATE_MESSAGE } from './actions'
import { getDateNowInString } from '../helpers'

const messagingPageReducer = (state, action) => {

  const addMessage = () => {
    const today = getDateNowInString()
    const messagesLength = state.correspondence.length
    const newMessage = {
      id: messagesLength + 1,
      message: state.newMessageText,
      date: today,
      avatar: `${require('../assets/images/default_avatar.jpg')}`
    }

    state.correspondence.push(newMessage)
  }

  const updateMessage = (newNote) => {
    state.newMessageText = newNote
  }

  switch (action.type) {
    case ADD_MESSAGE:
      addMessage()
      return state
    case UPDATE_MESSAGE:
      updateMessage(action.newNote)
      return state
    default:
      return state
  }

}

export default messagingPageReducer