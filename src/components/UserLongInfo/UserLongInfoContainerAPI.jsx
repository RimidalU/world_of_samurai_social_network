import React from 'react'
import UserLongInfo from './UserLongInfo'

class UserLongInfoContainerAPI extends React.Component {

  follow = () => {
    this.props.followUser(this.props.id)
  }

  unFollow = () => {
    this.props.unFollowUser(this.props.id)
  }

  render() {

    return (
      <UserLongInfo
        name={this.props.name}
        id={this.props.id}
        location={this.props.location}
        status={this.props.status}
        photos={this.props.photos}
        followed={this.props.followed}
        followingInProgress={this.props.followingInProgress}
        follow={this.follow}
        unFollow={this.unFollow}
      />
    )
  }
}

export default UserLongInfoContainerAPI