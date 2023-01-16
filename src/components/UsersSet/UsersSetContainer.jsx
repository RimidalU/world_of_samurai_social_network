import { connect } from 'react-redux'

import UsersSet from './UsersSet'

const mapStateToProps = (state) => {
  return {
    users: state.messagingPage.correspondence
  }
}

const UsersSetContainer = connect(mapStateToProps)(UsersSet)

export default UsersSetContainer