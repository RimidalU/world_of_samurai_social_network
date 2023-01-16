import { connect } from 'react-redux'

import CorrespondenceSet from './CorrespondenceSet'

const mapStateToProps = (state) => {
  return {
    correspondence: state.messagingPage.correspondence
  }
}

const CorrespondenceSetContainer = connect(mapStateToProps)(CorrespondenceSet)

export default CorrespondenceSetContainer