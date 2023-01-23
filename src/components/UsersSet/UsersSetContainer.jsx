import { connect } from 'react-redux'

import {
  setCurrentPage,
  setIsFollowingProgress,

  getUsersThunksCreator,
  followUserThunksCreator,
  unFollowUserThunksCreator
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
  setCurrentPage,
  setIsFollowingProgress,

  getUsers: getUsersThunksCreator,
  followUser: followUserThunksCreator,
  unFollowUser: unFollowUserThunksCreator,
}

const UsersSetContainer = connect(mapStateToProps, mapDispatchToProps)(UsersSetContainerAPI)

export default UsersSetContainer