import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import { Provider } from './StoreContext'

import store from './redux/store'

import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'))

let renderTree = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  )
}

renderTree()

store.subscribe(renderTree)