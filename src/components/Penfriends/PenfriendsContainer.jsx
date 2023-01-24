import { connect } from 'react-redux'
import { compose } from 'redux'

import { withAuthRedirect } from '../../hoc/withAuthRedirect'

import Penfriends from './Penfriends'

const mapStateToProps = (state) => {
  return {
    penfriends: state.messagingPage.penfriends,
  }
}

export default compose(
  withAuthRedirect,
  connect(mapStateToProps)
  )(Penfriends)