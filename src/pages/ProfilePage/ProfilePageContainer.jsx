import { connect } from 'react-redux'
import { compose } from 'redux'

import withRouter from '../../helpers/HOKs/withRouter'

import ProfilePageContainerAPI from './ProfilePageContainerAPI'
import { getProfileThunksCreator } from '../../redux/actionCreators/profilePageActionCreator'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'

const mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile,
  }
}

const mapDispatchToProps = {
  getProfile: getProfileThunksCreator
}

export default compose(
  withRouter,
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps))
  (ProfilePageContainerAPI)