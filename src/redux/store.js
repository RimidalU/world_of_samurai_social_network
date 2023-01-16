import { combineReducers, legacy_createStore as createStore } from 'redux'

import messagingPageReducer from './reducers/messagingPageReducer'
import profilePageReducer from './reducers/profilePageReducer'
// import usersPageReducer from './reducers/usersPageReducer'
// TODO: refactor to Redux Toolkit (https://redux.js.org/introduction/why-rtk-is-redux-today)

let reducers = combineReducers(
  {
    profilePage: profilePageReducer,
    messagingPage: messagingPageReducer,
    // usersPage: usersPageReducer
  })

let store = createStore(reducers)

export default store
