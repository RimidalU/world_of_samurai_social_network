import axios from 'axios'
import React from 'react'

import UsersSet from './UsersSet'

class UsersSetContainerAPI extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setTotalUsersCount(response.data.totalCount)
        this.props.setUsers(response.data.items)
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
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
      />
    )
  }
}

export default UsersSetContainerAPI