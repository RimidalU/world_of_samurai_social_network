import React, { useContext } from 'react'

import AddMessageContainer from '../../layouts/AddNote/AddMessageContainer'
import { StoreContext } from '../../StoreContext'
import CorrespondenceSet from '../CorrespondenceSet/CorrespondenceSet'

import styles from './Correspondence.module.css'

const Correspondence = () => {
  const store = useContext(StoreContext)

  const correspondence = store.getState().messagingPage.correspondence

  return (
    <div className={styles.wrapper}>
      <AddMessageContainer />
      <CorrespondenceSet correspondence={correspondence} />
    </div>
  )
}

export default Correspondence