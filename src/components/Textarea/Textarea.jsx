import React from 'react'

import styles from './Textarea.module.css'

const Textarea = ({ placeholder, id, refer, rows = 2, value, onChange, ...rest }) => {
  return (
    <textarea
      rows={rows}
      placeholder={placeholder}
      ref={refer}
      id={id}
      value={value}
      onChange={onChange}
      {...rest}
      required
      className={styles.input} />
  )
}

export default Textarea