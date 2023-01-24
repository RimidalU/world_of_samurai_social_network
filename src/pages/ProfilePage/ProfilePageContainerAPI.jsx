import React from 'react'
import { Navigate } from 'react-router-dom'

import ProfilePage from './ProfilePage'

class ProfilePageContainerAPI extends React.Component {

  componentDidMount() {
    let userId = this.props.router.params.userId
    this.props.getProfile(userId)
  }

  render() {

    if (!this.props.isAuth) return <Navigate to={'/login'} />

    return (
      <ProfilePage {...this.props} userProfile={this.props.userProfile} />
    )
  }
}

export default ProfilePageContainerAPI