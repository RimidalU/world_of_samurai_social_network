import { combineReducers, legacy_createStore as createStore } from 'redux'

import messagingPageReducer from '../handmadeRedux/messagingPageReducer'
import profilePageReducer from '../handmadeRedux/profilePageReducer'
// TODO: refactor to Redux Toolkit (https://redux.js.org/introduction/why-rtk-is-redux-today)

let reducers = combineReducers(
  {
    profilePage: profilePageReducer,
    messagingPage: messagingPageReducer
  })

let store = createStore(reducers)

export default store
