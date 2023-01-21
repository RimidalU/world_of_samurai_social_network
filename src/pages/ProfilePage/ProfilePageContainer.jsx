import { connect } from 'react-redux'

import ProfilePageContainerAPI from './ProfilePageContainerAPI'
import { setUserProfile } from '../../redux/actionCreators/profilePageActionCreator'
import withRouter from '../../helpers/HOKs/withRouter'

const mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUserProfile: (userProfile) => {
      dispatch(setUserProfile(userProfile))
    }
  }
}

let ProfilePageContainerAPIWithUrlData = withRouter(ProfilePageContainerAPI)

const ProfilePageContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePageContainerAPIWithUrlData)

export default ProfilePageContainer