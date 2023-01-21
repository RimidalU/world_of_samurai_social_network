import { SET_AUTH_USER_DATA } from '../actions/authActions'

export const setAuthUserData = (id, email, login) => (
  {
    type: SET_AUTH_USER_DATA,
    data: {id, email, login}
  }
)
