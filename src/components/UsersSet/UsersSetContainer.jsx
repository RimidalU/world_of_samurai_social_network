import { connect } from 'react-redux'

import { followUser, setUsers, unFollowUser, setCurrentPage, setTotalUsersCount, setIsFetching } from '../../redux/actionCreators/usersPageActionCreator'

import UsersSetContainerAPI from './UsersSetContainerAPI'

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    followUser: (userId) => {
      dispatch(followUser(userId))
    },
    unFollowUser: (userId) => {
      dispatch(unFollowUser(userId))
    },
    setUsers: (users) => {
      dispatch(setUsers(users))
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPage(currentPage))
    },
    setTotalUsersCount: (totalUsersCount) => {
      dispatch(setTotalUsersCount(totalUsersCount))
    },
    setIsFetching: (isFetching) => {
      dispatch(setIsFetching(isFetching))
    }
  }
}

const UsersSetContainer = connect(mapStateToProps, mapDispatchToProps)(UsersSetContainerAPI)

export default UsersSetContainer