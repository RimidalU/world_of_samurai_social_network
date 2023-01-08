import React from 'react'
import { NavLink } from 'react-router-dom'
import Message from '../../components/Message/Message'

import styles from './MessagingPage.module.css'

const MessagingPage = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.dialogs}>
        <li>
          <NavLink to='/messaging/1'>
            User 1
          </NavLink>
        </li>
        <li className='active'>
          <NavLink to='/messaging/2'>
            User 2
          </NavLink>        </li>
        <li>
          <NavLink to='/messaging/3'>
            User 3
          </NavLink>        </li>
        <li>
          <NavLink to='/messaging/4'>
            User 4
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