import axios from 'axios'
import React from 'react'

import ProfilePage from './ProfilePage'

class ProfilePageContainerAPI extends React.Component {

  componentDidMount() {
    let userId = this.props.router.params.userId

    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId ?? 11}`)
      .then(response => {
        this.props.setUserProfile(response.data)
      })
  }

  render() {
    return (
      <ProfilePage {...this.props} userProfile={this.props.userProfile} />
    )
  }

}

export default ProfilePageContainerAPI