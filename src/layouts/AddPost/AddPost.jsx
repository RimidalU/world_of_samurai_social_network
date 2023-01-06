import React from 'react'

import styles from './AddPost.module.css'

const AddPost = () => {
  return (
    <div className={styles.wrapper}>
      <form >
        <p>
          <label for="addPost">
            Add new post
          </label>
        </p>
        <textarea
          rows='2'
          // cols='150'
          name='addPost'
          label='Input post'
        ></textarea>
        <p>
          <input type="submit" value="Add Post" />
        </p>
      </form>
    </div>
  )
}

export default AddPost