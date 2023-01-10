import React from 'react'

import styles from './AddPost.module.css'

const textarea = React.createRef()

const AddPost = () => {
  return (
    <div className={styles.wrapper}>
      <form >
        <p>
          <label htmlFor="addPost">
            Add new post
          </label>
        </p>
        <textarea ref={textarea}
          rows='2'
          // cols='150'
          name='addPost'
          label='Input post'
        ></textarea>
        <p>
          <input type="submit" value="Add Post" onClick={() => alert(textarea.current.value)}/>
        </p>
      </form>
    </div>
  )
}

export default AddPost