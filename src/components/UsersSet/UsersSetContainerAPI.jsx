import React from 'react'
import usersAPI from '../../api/usersAPI'

import UsersSet from './UsersSet'

class UsersSetContainerAPI extends React.Component {

  componentDidMount() {
    this.props.setIsFetching(true)

    usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then(data => {
        this.props.setTotalUsersCount(data.totalCount)
        this.props.setUsers(data.items)
        this.props.setIsFetching(false)
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setIsFetching(true)
    this.props.setCurrentPage(pageNumber)

    usersAPI.getUsers(pageNumber, this.props.pageSize)
      .then(data => {
        this.props.setUsers(data.items)
        this.props.setIsFetching(false)
      })
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