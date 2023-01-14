import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'

import store from './redux/store'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))


let renderTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} dispatch={store.dispatch.bind(store)} />
      </BrowserRouter>
    </React.StrictMode>
  )
}

renderTree(store.getState())

store.subscribe(() => {
  let state = store.getState()
  renderTree(state)
})