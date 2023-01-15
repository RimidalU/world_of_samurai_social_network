import React from 'react'

import AddMessageContainer from '../../layouts/AddNote/AddMessageContainer'
import CorrespondenceSetContainer from '../CorrespondenceSet/CorrespondenceSetContainer'

import styles from './Correspondence.module.css'

const Correspondence = () => {

  return (
    <div className={styles.wrapper}>
      <AddMessageContainer />
      <CorrespondenceSetContainer />
    </div>
  )
}

export default Correspondence