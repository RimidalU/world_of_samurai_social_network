import { connect } from 'react-redux'

import PostsSet from './PostsSet'

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts
  }
}

const PostsSetContainer = connect(mapStateToProps)(PostsSet)

export default PostsSetContainer