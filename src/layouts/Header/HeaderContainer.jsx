import { connect } from 'react-redux'

import HeaderContainerAPI from './HeaderContainerAPI'
import { loginThunksCreator } from '../../redux/actionCreators/authActionCreator'

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}

const mapDispatchToProps = {
  loginUser: loginThunksCreator
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderContainerAPI)

export default HeaderContainer