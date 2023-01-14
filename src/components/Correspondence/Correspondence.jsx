import React, { useContext } from 'react'

import AddNoteContainer from '../../layouts/AddNote/AddNoteContainer'
import { StoreContext } from '../../StoreContext'
import CorrespondenceSet from '../CorrespondenceSet/CorrespondenceSet'

import styles from './Correspondence.module.css'

const Correspondence = () => {
  const store = useContext(StoreContext)

  const correspondence = store.getState().messagingPage.correspondence

  return (
    <div className={styles.wrapper}>
      <AddNoteContainer componentType='message' />
      <CorrespondenceSet correspondence={correspondence} />
    </div>
  )
}

export default Correspondence