import { connect } from 'react-redux'

import ProfilePageContainerAPI from './ProfilePageContainerAPI'
import withRouter from '../../helpers/HOKs/withRouter'
import { getProfileThunksCreator } from '../../redux/actionCreators/profilePageActionCreator'

const mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile,
    isAuth: state.auth.isAuth
  }
}

const mapDispatchToProps = {
  getProfile: getProfileThunksCreator
}

let ProfilePageContainerAPIWithUrlData = withRouter(ProfilePageContainerAPI)

const ProfilePageContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePageContainerAPIWithUrlData)

export default ProfilePageContainer