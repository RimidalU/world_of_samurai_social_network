import { FOLLOW_USER, UNFOLLOW_USER, SET_USERS } from '../actions/usersPageActions'

export const followUser = (userId) => (
  {
    type: FOLLOW_USER,
    userId
  }
)

export const unfollowUser = (userId) => (
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