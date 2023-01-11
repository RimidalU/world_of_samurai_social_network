import state from './handmadeRedux/state'
import renderTree from './render'

renderTree(state)

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'

// import App from './App'

// import state from './handmadeRedux/state'
// import { addPost } from './handmadeRedux/state'

// import './index.css'

//   const root = ReactDOM.createRoot(document.getElementById('root'))
//   root.render(
//     <React.StrictMode>
//       <BrowserRouter>
//         <App state={state} addPost={addPost} />
//       </BrowserRouter>
//     </React.StrictMode>
//   )

