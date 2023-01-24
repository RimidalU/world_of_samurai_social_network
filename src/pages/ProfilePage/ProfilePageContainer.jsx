import { connect } from 'react-redux'

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

let ProfilePageContainerAPIWithUrlData = withRouter(ProfilePageContainerAPI)

const ProfilePageContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(ProfilePageContainerAPIWithUrlData))

export default ProfilePageContainer