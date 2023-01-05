import React from 'react'

import Footer from './layouts/Footer'
import Sidebar from './layouts/Sidebar'
import Header from './layouts/Header'
import ProfilePage from './pages/ProfilePage'

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
