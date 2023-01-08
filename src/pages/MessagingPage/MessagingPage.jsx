import React from 'react'
import { NavLink } from 'react-router-dom'
import Message from '../../components/Message/Message'
import UserShortInfo from '../../components/UserShortInfo/UserShortInfo'

import styles from './MessagingPage.module.css'

const MessagingPage = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.dialogs}>
        <li>
          <NavLink to='/messaging/1'>
            <UserShortInfo user='Den' />
          </NavLink>
        </li>
        <li className='active'>
          <NavLink to='/messaging/2'>
            <UserShortInfo user='Bob' />
          </NavLink>        </li>
        <li>
          <NavLink to='/messaging/3'>
            <UserShortInfo user='Carolina' />
          </NavLink>        </li>
        <li>
          <NavLink to='/messaging/4'>
            <UserShortInfo user='Emma'/>
          </NavLink>        </li>
      </ul>
      <ul>
        <li>
          <Message message='Hey! How are you?' />
        </li>
        <li>
          <Message message="Thank you. I'm fine." />
        </li>
        <li>
          <Message message="What's the latest news?" />
        </li>
        <li>
          <Message message='Grass in the yard, firewood on the grass' />
        </li>
      </ul>
    </div>
  )
}

export default MessagingPage