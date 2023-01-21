import { SET_AUTH_USER_DATA } from '../actions/authActions'
import authInitialState from '../initialStates/authInitialState'

const authReducer = (state = authInitialState, action) => {

  const setAuthUserData = (data) => {
    return {
      ...state,
      ...data,
      isAuth: true
    }
  }

  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return setAuthUserData(action.data)
    default:
      return state
  }
}

export default authReducer