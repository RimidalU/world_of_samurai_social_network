import { connect } from 'react-redux'

import Penfriends from './Penfriends'

const mapStateToProps = (state) => {
  return {
    penfriends: state.messagingPage.penfriends
  }
}

const PenfriendsContainer = connect(mapStateToProps)(Penfriends)

export default PenfriendsContainer