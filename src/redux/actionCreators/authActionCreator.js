import { SET_AUTH_USER_DATA } from '../actions/authActions'
import authAPI from '../../api/authAPI'


export const setAuthUserData = (id, email, login) => (
  {
    type: SET_AUTH_USER_DATA,
    data: { id, email, login }
  }
)

//thunks

export const loginThunksCreator = () => {

  return (dispatch) => {
    authAPI.login()
      .then(data => {
        if (data.resultCode === 0) {
          let { id, login, email } = data.data
          dispatch(setAuthUserData(id, email, login))
        }
      })
  }
}