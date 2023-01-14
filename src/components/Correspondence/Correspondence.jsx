import React from 'react'
import AddNoteContainer from '../../layouts/AddNote/AddNoteContainer'
import CorrespondenceSet from '../CorrespondenceSet/CorrespondenceSet'

import styles from './Correspondence.module.css'

const Correspondence = ({ store }) => {
  const correspondence = store.getState().messagingPage.correspondence
  return (
    <div className={styles.wrapper}>
      <AddNoteContainer componentType='message' store={store} />
      <CorrespondenceSet correspondence={correspondence} />
    </div>

  )
}

export default Correspondence