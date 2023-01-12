import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'

import store from './handmadeRedux/state'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))


let renderTree = (store) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App store={store} />
      </BrowserRouter>
    </React.StrictMode>
  )
}

renderTree(store)

store.subscribe(renderTree)