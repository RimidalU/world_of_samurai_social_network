import { connect } from 'react-redux'

import UsersSet from './UsersSet'

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  }
}

const UsersSetContainer = connect(mapStateToProps)(UsersSet)

export default UsersSetContainer