import React from 'react'
import Button from '../../components/Button/Button'
import Textarea from '../../components/Textarea/Textarea'

import styles from './AddPost.module.css'

const AddPost = ({ addPostToState, newPostText, updatePostText }) => {
  const textarea = React.createRef()
  const postText = newPostText()

  function createPost() {
    addPostToState()
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
        value={postText}
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
  )
}

export default AddPost