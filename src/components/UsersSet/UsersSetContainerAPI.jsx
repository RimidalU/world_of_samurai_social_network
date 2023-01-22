import axios from 'axios'
import React from 'react'

import UsersSet from './UsersSet'

class UsersSetContainerAPI extends React.Component {

  componentDidMount() {
    this.props.setIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${this.props.currentPage}&count=${this.props.pageSize}`,
      { withCredentials: true })
      .then(response => {
        this.props.setTotalUsersCount(response.data.totalCount)
        this.props.setUsers(response.data.items)
        this.props.setIsFetching(false)
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setIsFetching(true)
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${pageNumber}&count=${this.props.pageSize}`,
      { withCredentials: true })
      .then(response => {
        this.props.setUsers(response.data.items)
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
      />
    )
  }
}

export default UsersSetContainerAPI