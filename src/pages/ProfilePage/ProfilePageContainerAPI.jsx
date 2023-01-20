import axios from 'axios'
import React from 'react'

import ProfilePage from './ProfilePage'

class ProfilePageContainerAPI extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/10`)
      .then(response => {
        console.log(response.data)
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