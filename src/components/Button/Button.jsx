import React from 'react'

import styles from './Button.module.css'

const Button = ({ type='button', isDisabled=false, isSelected = false, onClick, children, ...rest }) => {
  return (
    <button type={type} disabled={isDisabled} onClick={onClick} {...rest} className={`${styles.button} ${isSelected && styles.selected}`} >
      {children}
    </button>
  )
}

export default Button