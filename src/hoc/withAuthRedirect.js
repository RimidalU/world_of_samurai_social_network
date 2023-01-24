import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

export const withAuthRedirect = (Component) => {

  const authRedirect = (props) => {
    return !props.isAuth ? <Navigate to={'/login'} /> : <Component {...props} />
  }

  return connect(mapStateToProps)(authRedirect)
}

