import usersPageInitialState from '../initialStates/usersPageInitialState'
import { FOLLOW_USER, UNFOLLOW_USER, SET_USERS } from '../actions/usersPageActions'

const usersPageReducer = (state = usersPageInitialState, action) => {

  const followUser = (userId) => {
    return {
      ...state,
      users: state.users.map(user => {
        if (user.id === userId) {
          return { ...user, followed: true }
        }
        return user
      })
    }
  }

  const unFollowUser = (userId) => {
    return {
      ...state,
      users: state.users.map(user => {
        if (user.id === userId) {
          return { ...user, followed: false }
        }
        return user
      })
    }
  }

  const setUsers = (newUsers) => {
    return {
      ...state,
      users: [...newUsers]
    }
  }

  switch (action.type) {
    case FOLLOW_USER:
      return followUser(action.userId)
    case UNFOLLOW_USER:
      return unFollowUser(action.userId)
    case SET_USERS:
      return setUsers(action.users)
    default:
      return state
  }
}

export default usersPageReducer