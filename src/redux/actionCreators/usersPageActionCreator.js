import subscriptionsAPI from '../../api/subscriptionsAPI'
import usersAPI from '../../api/usersAPI'
import {
  FOLLOW_USER,
  UNFOLLOW_USER,
  SET_USERS,
  SET_CURRENT_PAGE,
  SET_TOTAL_USERS_COUNT,
  SET_IS_FETCHING,
  SET_IS_FOLLOWING_PROGRESS
} from '../actions/usersPageActions'

export const followUser = (userId) => (
  {
    type: FOLLOW_USER,
    userId
  }
)

export const unFollowUser = (userId) => (
  {
    type: UNFOLLOW_USER,
    userId
  }
)

export const setUsers = (users) => (
  {
    type: SET_USERS,
    users
  }
)

export const setCurrentPage = (currentPage) => (
  {
    type: SET_CURRENT_PAGE,
    currentPage
  }
)


export const setTotalUsersCount = (totalUsersCount) => (
  {
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
  }
)

export const setIsFetching = (isFetching) => (
  {
    type: SET_IS_FETCHING,
    isFetching
  }
)

export const setIsFollowingProgress = (followingInProgress, userId) => (
  {
    type: SET_IS_FOLLOWING_PROGRESS,
    followingInProgress,
    userId
  }
)

//thunks

export const getUsersThunksCreator = (currentPage, pageSize) => {

  return (dispatch) => {
    dispatch(setIsFetching(true))

    usersAPI.getUsers(currentPage, pageSize)
      .then(data => {
        dispatch(setTotalUsersCount(data.totalCount))
        dispatch(setUsers(data.items))
        dispatch(setIsFetching(false))
      })
  }
}

export const followUserThunksCreator = (id) => {

  return (dispatch) => {
    dispatch(setIsFollowingProgress(true, id))

    subscriptionsAPI.subscribeToUser(id)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(followUser(id))
        }
        dispatch(setIsFollowingProgress(false, id))
      })
  }
}

export const unFollowUserThunksCreator = (id) => {

  return (dispatch) => {
    dispatch(setIsFollowingProgress(true, id))

    subscriptionsAPI.unfollowUser(id)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(unFollowUser(id))
        }
        dispatch(setIsFollowingProgress(false, id))
      })
  }
}
