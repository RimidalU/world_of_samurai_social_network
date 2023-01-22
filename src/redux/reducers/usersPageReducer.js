import usersPageInitialState from '../initialStates/usersPageInitialState'
import {
  FOLLOW_USER,
  UNFOLLOW_USER,
  SET_USERS,
  SET_CURRENT_PAGE,
  SET_TOTAL_USERS_COUNT,
  SET_IS_FETCHING,
  SET_IS_FOLLOWING_PROGRESS
} from '../actions/usersPageActions'

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

  const setCurrentPage = (currentPage) => {
    return {
      ...state, currentPage
    }
  }

  const setTotalUsersCount = (totalUsersCount) => {
    return {
      ...state, totalUsersCount
    }
  }

  const setIsFetching = (isFetching) => {
    return {
      ...state, isFetching
    }
  }

  const setIsFollowingProgress = (followingInProgress, userId) => {
    return {
      ...state,
      followingInProgress: followingInProgress
        ? [...state.followingInProgress, userId]
        : state.followingInProgress.filter(id => id !== userId)
    }
  }

  switch (action.type) {
    case FOLLOW_USER:
      return followUser(action.userId)
    case UNFOLLOW_USER:
      return unFollowUser(action.userId)
    case SET_USERS:
      return setUsers(action.users)
    case SET_CURRENT_PAGE:
      return setCurrentPage(action.currentPage)
    case SET_TOTAL_USERS_COUNT:
      return setTotalUsersCount(action.totalUsersCount)
    case SET_IS_FETCHING:
      return setIsFetching(action.isFetching)
    case SET_IS_FOLLOWING_PROGRESS:
      return setIsFollowingProgress(action.followingInProgress, action.userId)
    default:
      return state
  }
}

export default usersPageReducer