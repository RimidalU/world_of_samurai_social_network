import usersPageInitialState from '../initialStates/usersPageInitialState'
import { ADD_MESSAGE, UPDATE_MESSAGE } from '../actions/usersPageActions'
import { getDateNowInString } from '../../helpers'

const usersPageReducer = (state = usersPageInitialState, action) => {

//   const addMessage = () => {
//     const today = getDateNowInString()
//     const messagesLength = state.correspondence.length
//     const newMessage = {
//       id: messagesLength + 1,
//       message: state.newMessageText,
//       date: today,
//       avatar: `${require('../../assets/images/default_avatar.jpg')}`
//     }
//     return {
//       ...state,
//       correspondence: [...state.correspondence, newMessage]
//     }
//   }

//   const updateMessage = (newNote) => {
//     return {
//       ...state,
//       newMessageText: newNote
//     }
//   }

//   switch (action.type) {
//     case ADD_MESSAGE:
//       return addMessage()
//     case UPDATE_MESSAGE:
//       return updateMessage(action.newNote)
//     default:
//       return state
//   }
}

export default usersPageReducer