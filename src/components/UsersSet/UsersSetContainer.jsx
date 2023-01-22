import { connect } from 'react-redux'

import {
  followUser,
  unFollowUser,
  setCurrentPage,
  setIsFollowingProgress,

  getUsersThunksCreator
} from '../../redux/actionCreators/usersPageActionCreator'

import UsersSetContainerAPI from './UsersSetContainerAPI'

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  }
}

/* If you pass an AC object as the second argument to connect, then connect wraps your ACs in a wrapper
function () => store.dispatch(AC) and passes it to the component's props.

https://qna.habr.com/q/535268 */

const mapDispatchToProps = {
  followUser,
  unFollowUser,
  setCurrentPage,
  setIsFollowingProgress,

  getUsers: getUsersThunksCreator
}

const UsersSetContainer = connect(mapStateToProps, mapDispatchToProps)(UsersSetContainerAPI)

export default UsersSetContainer