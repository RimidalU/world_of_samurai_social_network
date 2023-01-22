import React from 'react'

import UsersSet from './UsersSet'

class UsersSetContainerAPI extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
  }

  render() {

    return (
      <UsersSet
        users={this.props.users}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        followUser={this.props.followUser}
        unFollowUser={this.props.unFollowUser}
        onPageChanged={this.onPageChanged}
        isFetching={this.props.isFetching}
        followingInProgress={this.props.followingInProgress}
        setIsFollowingProgress={this.props.setIsFollowingProgress}
      />
    )
  }
}

export default UsersSetContainerAPI