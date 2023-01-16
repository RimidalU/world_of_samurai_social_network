import { connect } from 'react-redux'

import { addPost, updatePost } from '../../handmadeRedux/actionCreator'
import AddNote from './AddNote'

const mapStateToProps = (state) => {
  return {
    newNoteText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNote: () => {
      dispatch(addPost())
      dispatch(updatePost(''))
    },
    changeNote: (noteText) => {
      dispatch(updatePost(noteText))
    },
    removeNote: () => {
      dispatch(updatePost(''))
    }
  }
}

const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddNote)

export default AddPostContainer