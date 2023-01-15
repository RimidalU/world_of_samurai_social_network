import React, { useContext } from 'react'

import { StoreContext } from '../../StoreContext'
import PostsSet from './PostsSet'

const PostsSetContainer = () => {

  const store = useContext(StoreContext)
  const posts = store.getState().profilePage.posts

  return (
    <PostsSet posts={posts} />
  )
}

export default PostsSetContainer