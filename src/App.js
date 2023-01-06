import React from 'react'

import Footer from './layouts/Footer/Footer'
import Sidebar from './layouts/Sidebar/Sidebar'
import Header from './layouts/Header/Header'
import ProfilePage from './pages/ProfilePage/ProfilePage'

import './App.css'

function App() {
  return (
    <div className='App'>
      <Header />
      <Sidebar />
      <ProfilePage />
      <Footer />
    </div>
  )
}

export default App
