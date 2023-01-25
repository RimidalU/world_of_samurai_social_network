import React from 'react'

import styles from './Textarea.module.css'

const Textarea = ({ placeholder, defaultValue, id, refer, rows = 2, value, onChange, ...rest }) => {
  return (
    <textarea
      rows={rows}
      placeholder={placeholder}
      ref={refer}
      id={id}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      {...rest}
      required
      autoFocus
      className={styles.input} />
  )
}

export default Textarea