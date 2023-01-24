import { connect } from 'react-redux'

import Penfriends from './Penfriends'

const mapStateToProps = (state) => {
  return {
    penfriends: state.messagingPage.penfriends,
    isAuth: state.auth.isAuth
  }
}

const PenfriendsContainer = connect(mapStateToProps)(Penfriends)

export default PenfriendsContainer