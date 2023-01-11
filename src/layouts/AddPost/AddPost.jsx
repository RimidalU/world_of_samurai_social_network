import React from 'react'
import Button from '../../components/Button/Button'
import Textarea from '../../components/Textarea/Textarea'

import styles from './AddPost.module.css'

const AddPost = ({ addPostToState, newPostText, updatePostText }) => {

const textarea = React.createRef()

  function createPost() {
    addPostToState(textarea.current.value)
    removePost()
  }

  function removePost() {
    updatePostText('')
  }

  function changePostText() {
    updatePostText(textarea.current.value)
  }

  return (
    <form className={styles.wrapper}>
      <Textarea
        refer={textarea}
        placeholder='Add thought'
        id='addPost'
        value={newPostText}
        onChange={changePostText}
      />
      <span className={styles.buttonWrapper}>
        <Button onClick={removePost} >
          Erase stupidity
        </Button>
        <Button onClick={createPost}>
          Declare wisdom
        </Button>
      </span>
    </form>
    // </div>
  )
}

export default AddPost