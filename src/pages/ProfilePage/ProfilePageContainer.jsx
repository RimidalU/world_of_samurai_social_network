import { connect } from 'react-redux'

import ProfilePageContainerAPI from './ProfilePageContainerAPI'
import { setUserProfile } from '../../redux/actionCreators/profilePageActionCreator'

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

const ProfilePageContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePageContainerAPI)

export default ProfilePageContainer