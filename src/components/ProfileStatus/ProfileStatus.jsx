import React from 'react'

import Textarea from '../Textarea/Textarea'
import styles from './ProfileStatus.module.css'

const ProfileStatusPlaceholder = 'what is your motto samurai?'
const defaultStatus = 'To act for the sake of Man...'

class ProfileStatus extends React.Component {

  state = {
    editMode: false
  }

  // onChange = () => {
  //   this.props.setProfileStatus   // TODO: add PUT method
  // }

  activateEditMode = () => {
    this.setState({ editMode: true })
  }

  deActivateEditMode = () => {
    this.setState({ editMode: false })
  }


  render() {
    return (
      <>
        {this.state.editMode ?
          <div >
            <Textarea
              rows={1}
              defaultValue={defaultStatus}
              value={this.props.aboutMe}
              placeholder={ProfileStatusPlaceholder}
              // onChange={this.onChange}
              onBlur={this.deActivateEditMode}
            />
          </div>
          :
          <div>
            <span onDoubleClick={this.activateEditMode} className={styles.status}>
              {this.props.aboutMe}
            </span>
          </div>
        }
      </>
    )
  }

}

export default ProfileStatus