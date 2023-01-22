import React from 'react'
import authAPI from '../../api/authAPI'

import Header from './Header'

class HeaderContainerAPI extends React.Component {

  componentDidMount() {
    authAPI.login()
      .then(data => {
        if (data.resultCode === 0) {
          let { id, login, email } = data.data
          this.props.setAuthUserData(id, email, login)
        }
      })
  }

  render() {
    return (
      <Header {...this.props} />
    )
  }

}

export default HeaderContainerAPI