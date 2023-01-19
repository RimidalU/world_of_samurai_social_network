import axios from 'axios'
import React from 'react'

import UserLongInfo from '../UserLongInfo/UserLongInfo'

import styles from './UsersSet.module.css'

class UsersSetContainerAPI extends React.Component {

  getUsers = () => {
    if (this.props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users/?page=2200')
        .then(response => {
          this.props.setUsers(response.data.items)
        })
    }
  }

  render() {
    return (
      <ul className={styles.wrapper}>
        <button onClick={this.getUsers}>GetUsers</button>
        {
          this.props.users.map(user => (
            <li key={user.id} className={styles.user}>
              <UserLongInfo {...user} followUser={this.props.followUser} unFollowUser={this.props.unFollowUser} />
            </li>
          ))
        }
      </ul >
    )
  }
}



export default UsersSetContainerAPI