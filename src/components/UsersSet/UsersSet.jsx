import React from 'react'
import Pagination from '../Pagination/Pagination'
import Spinier from '../Spinier/Spinier'

import UserLongInfoContainerAPI from '../UserLongInfo/UserLongInfoContainerAPI'

import styles from './UsersSet.module.css'

const UsersSet = ({ users, totalUsersCount, pageSize, currentPage, onPageChanged, followUser, unFollowUser, isFetching, followingInProgress, setIsFollowingProgress }) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize)

  return (
    <div className={styles.pageWrapper}>
      {isFetching
        ?
        <Spinier />
        :
        <>
          <Pagination itemsCount={pagesCount} currentItem={currentPage} onItemsChanged={onPageChanged} />
          <ul className={styles.wrapper}>
            {
              users.map(user => (
                <li key={user.id}>
                  <UserLongInfoContainerAPI {...user} followingInProgress={followingInProgress} followUser={followUser} unFollowUser={unFollowUser} setIsFollowingProgress={setIsFollowingProgress} />
                </li>
              ))
            }
          </ul >
          <Pagination itemsCount={pagesCount} currentItem={currentPage} onItemsChanged={onPageChanged} />
        </>
      }
    </div>
  )
}

export default UsersSet