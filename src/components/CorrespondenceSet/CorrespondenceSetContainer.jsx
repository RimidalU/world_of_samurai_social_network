import React, { useContext } from 'react'

import { StoreContext } from '../../StoreContext'

import CorrespondenceSet from './CorrespondenceSet'

const CorrespondenceSetContainer = () => {

  const store = useContext(StoreContext)
  const correspondence = store.getState().messagingPage.correspondence

  return (
    <CorrespondenceSet correspondence={correspondence} />
  )
}

export default CorrespondenceSetContainer