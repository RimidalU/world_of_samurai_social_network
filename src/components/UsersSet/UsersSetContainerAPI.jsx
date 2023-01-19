import axios from 'axios'
import React from 'react'
// import Button from '../Button/Button'

import UserLongInfo from '../UserLongInfo/UserLongInfo'
import Pagination from '../Pagination/Pagination'
import styles from './UsersSet.module.css'

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

    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

    return (
      <>
        <div>
          <Pagination itemsCount={pagesCount} currentItem={this.props.currentPage} onItemsChanged={this.onPageChanged} />
        </div>
        <ul className={styles.wrapper}>
          {
            this.props.users.map(user => (
              <li key={user.id} className={styles.user}>
                <UserLongInfo {...user} followUser={this.props.followUser} unFollowUser={this.props.unFollowUser} />
              </li>
            ))
          }
        </ul >
      </>

    )
  }
}



export default UsersSetContainerAPI