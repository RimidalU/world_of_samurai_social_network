import React from 'react'
import Button from '../../components/Button/Button'
import Textarea from '../../components/Textarea/Textarea'

import styles from './AddPost.module.css'

const textarea = React.createRef()

const AddPost = () => {

  function addPost() {
    alert(textarea.current.value)
    removePost()
  }

  function removePost() {
    textarea.current.value = ''
  }

  return (
    <form className={styles.wrapper}>
      <Textarea
        refer={textarea}
        placeholder='Add thought'
        id='addPost'
      />
      <span className={styles.buttonWrapper}>
        <Button onClick={removePost} >
          Erase stupidity
        </Button>
        <Button onClick={addPost}>
          Declare wisdom
        </Button>
      </span>
    </form>
    // </div>
  )
}

export default AddPost