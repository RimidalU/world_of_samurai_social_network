import React from 'react'

import ProfilePage from './ProfilePage'

class ProfilePageContainerAPI extends React.Component {

  componentDidMount() {
    let userId = this.props.router.params.userId
    this.props.getProfile(userId)
  }

  render() {
    return (
      <ProfilePage {...this.props} userProfile={this.props.userProfile} />
    )
  }
}

export default ProfilePageContainerAPI