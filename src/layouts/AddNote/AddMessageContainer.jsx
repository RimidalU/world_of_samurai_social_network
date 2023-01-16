import { connect } from 'react-redux'

import { addMessage, updateMessage } from '../../redux/actionCreator'
import AddNote from './AddNote'

const mapStateToProps = (state) => {
  return {
    newNoteText: state.messagingPage.newMessageText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNote: () => {
      dispatch(addMessage())
      dispatch(updateMessage(''))
    },
    changeNote: (noteText) => {
      dispatch(updateMessage(noteText))
    },
    removeNote: () => {
      dispatch(updateMessage(''))
    }
  }
}
const AddMessageContainer = connect(mapStateToProps, mapDispatchToProps)(AddNote)

export default AddMessageContainer