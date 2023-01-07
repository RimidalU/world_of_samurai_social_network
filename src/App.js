import React from 'react'

import Footer from './layouts/Footer/Footer'
import MenuSidebar from './layouts/MenuSidebar/MenuSidebar'
import Sidebar from './layouts/Sidebar/Sidebar'
import Header from './layouts/Header/Header'
// import MessagingPage from './pages/MessagingPage/MessagingPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'

import './App.css'

function App() {
  return (
    <div className='App'>
      <Header />
      <MenuSidebar />
      <ProfilePage />
      {/* <MessagingPage /> */}
      <Sidebar />
      <Footer />
    </div>
  )
}

export default App
