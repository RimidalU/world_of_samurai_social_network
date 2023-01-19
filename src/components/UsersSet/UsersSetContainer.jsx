import { connect } from 'react-redux'

import { followUser, setUsers, unFollowUser } from '../../redux/actionCreators/usersPageActionCreator'

// import UsersSet from './UsersSet'
import UsersSetContainerAPI from './UsersSetContainerAPI'

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
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
    }
  }
}

const UsersSetContainer = connect(mapStateToProps, mapDispatchToProps)(UsersSetContainerAPI)

export default UsersSetContainer