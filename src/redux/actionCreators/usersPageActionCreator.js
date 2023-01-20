import { FOLLOW_USER, UNFOLLOW_USER, SET_USERS, SET_CURRENT_PAGE, SET_TOTAL_USERS_COUNT, SET_IS_FETCHING } from '../actions/usersPageActions'

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