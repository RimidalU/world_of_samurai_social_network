import React from 'react'

import styles from './Button.module.css'

const Button = ({ type = 'button', onClick, children, ...rest }) => {
  return (
    <button type={type} onClick={onClick} {...rest} className={styles.button} >
      {children}
    </button>
  );
};

export default Button