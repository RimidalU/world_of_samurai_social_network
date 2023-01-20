import React from 'react'
import Button from '../Button/Button'

import styles from './Pagination.module.css'

const Pagination = ({ itemsCount, currentItem, onItemsChanged, ...rest }) => {
  let items = []

  for (let i = 1; i <= itemsCount; i++) {
    items.push(
      <Button
        key={i}
        isSelected={currentItem === i ? styles.selected : undefined}
        onClick={() => onItemsChanged(i)}
      >
        {i}
      </Button>
    )
  }

  return (
    <div>
      {items}
    </div>

  )
}

export default Pagination