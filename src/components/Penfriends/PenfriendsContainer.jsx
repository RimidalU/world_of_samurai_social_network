import React, { useContext } from 'react'

import { StoreContext } from '../../StoreContext'

import Penfriends from './Penfriends'

const PenfriendsContainer = () => {

  const store = useContext(StoreContext)
  const penfriends = store.getState().messagingPage.penfriends

  return (
    <Penfriends penfriends={penfriends} />
  )
}

export default PenfriendsContainer