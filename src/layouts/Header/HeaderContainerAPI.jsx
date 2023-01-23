import React from 'react'

import Header from './Header'

class HeaderContainerAPI extends React.Component {

  componentDidMount() {
    this.props.loginUser()
  }

  render() {
    return (
      <Header {...this.props} />
    )
  }

}

export default HeaderContainerAPI