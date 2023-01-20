import React from 'react'
import Pagination from '../Pagination/Pagination'

import UserLongInfo from '../UserLongInfo/UserLongInfo'
import styles from './UsersSet.module.css'

const UsersSet = ({ users, totalUsersCount, pageSize, currentPage, onPageChanged, followUser, unFollowUser }) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize)


  return (
    <>
      <Pagination itemsCount={pagesCount} currentItem={currentPage} onItemsChanged={onPageChanged} />
      <ul className={styles.wrapper}>
        {
          users.map(user => (
            <li key={user.id} className={styles.user}>
              <UserLongInfo {...user} followUser={followUser} unFollowUser={unFollowUser} />
            </li>
          ))
        }
      </ul >
      <Pagination itemsCount={pagesCount} currentItem={currentPage} onItemsChanged={onPageChanged} />
    </>
  )
}

export default UsersSet