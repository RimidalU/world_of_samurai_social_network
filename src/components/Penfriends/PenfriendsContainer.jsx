import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'

import Penfriends from './Penfriends'

const mapStateToProps = (state) => {
  return {
    penfriends: state.messagingPage.penfriends,
  }
}

const PenfriendsContainer = withAuthRedirect(connect(mapStateToProps)(Penfriends))

export default PenfriendsContainer