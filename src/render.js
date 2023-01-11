import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'

import { addPostToState, addMessageToState, updatePostText, updateMessageText } from './handmadeRedux/state'

import './index.css'

  const root = ReactDOM.createRoot(document.getElementById('root'))

let renderTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          addPostToState={addPostToState}
          updatePostText={updatePostText}
          addMessageToState={addMessageToState}
          updateMessageText={updateMessageText}
        />
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default renderTree