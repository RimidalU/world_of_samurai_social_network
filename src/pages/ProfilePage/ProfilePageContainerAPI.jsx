import React from 'react'
import profileAPI from '../../api/profileAPI'

import ProfilePage from './ProfilePage'

class ProfilePageContainerAPI extends React.Component {

  componentDidMount() {
    let userId = this.props.router.params.userId

    profileAPI.getProfile(userId)
      .then(data => {
        this.props.setUserProfile(data)
      })
  }

  render() {
    return (
      <ProfilePage {...this.props} userProfile={this.props.userProfile} />
    )
  }
}

export default ProfilePageContainerAPI