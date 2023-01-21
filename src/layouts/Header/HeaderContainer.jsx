import { connect } from 'react-redux'

import HeaderContainerAPI from './HeaderContainerAPI'
import { setAuthUserData } from '../../redux/actionCreators/authActionCreator'

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAuthUserData: (id, email, login) => {
      dispatch(setAuthUserData(id, email, login))
    }
  }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderContainerAPI)

export default HeaderContainer