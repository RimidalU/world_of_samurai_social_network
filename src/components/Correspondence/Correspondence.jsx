import React from 'react'

import AddNoteContainer from '../../layouts/AddNote/AddNoteContainer'
import { StoreContext } from '../../StoreContext'
import CorrespondenceSet from '../CorrespondenceSet/CorrespondenceSet'

import styles from './Correspondence.module.css'

const Correspondence = () => {
  return (
    <div className={styles.wrapper}>
      <AddNoteContainer componentType='message' />

      <StoreContext.Consumer>
        {(store) => {
          const correspondence = store.getState().messagingPage.correspondence

          return <CorrespondenceSet correspondence={correspondence} />
        }}
      </StoreContext.Consumer>

    </div>
  )
}

export default Correspondence