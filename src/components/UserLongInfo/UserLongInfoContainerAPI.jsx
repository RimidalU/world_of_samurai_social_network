import React from 'react'
import UserLongInfo from './UserLongInfo'
import subscriptionsAPI from '../../api/subscriptionsAPI'


class UserLongInfoContainerAPI extends React.Component {

  follow = () => {
    this.props.setIsFollowingProgress(true, this.props.id)

    subscriptionsAPI.subscribeToUser(this.props.id)
      .then(data => {
        if (data.resultCode === 0) {
          this.props.followUser(this.props.id)
        }
        this.props.setIsFollowingProgress(false, this.props.id)
      })
  }

  unFollow = () => {
    this.props.setIsFollowingProgress(true, this.props.id)

    subscriptionsAPI.unfollowUser(this.props.id)
      .then(data => {
        if (data.resultCode === 0) {
          this.props.unFollowUser(this.props.id)
        }
        this.props.setIsFollowingProgress(false, this.props.id)
      })
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