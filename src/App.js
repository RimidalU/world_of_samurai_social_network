import React from 'react'
import { Routes, Route } from "react-router-dom"

import ProfilePageContainer from './pages/ProfilePage/ProfilePageContainer'
import UnavailablePage from './pages/UnavailablePage/UnavailablePage'
import Footer from './layouts/Footer/Footer'
import MenuSidebar from './layouts/MenuSidebar/MenuSidebar'
import Sidebar from './layouts/Sidebar/Sidebar'
import MessagingPage from './pages/MessagingPage/MessagingPage'
import NewsPage from './pages/NewsPage/NewsPage'
import MusicPage from './pages/MusicPage/MusicPage'
import SettingsPage from './pages/SettingsPage/SettingsPage'

import './App.css'
import UsersPage from './pages/UsersPage/UsersPage'
import HeaderContainer from './layouts/Header/HeaderContainer'
import LoginPage from './pages/LoginPage/LoginPage'

function App() {
  return (
    <div className='App'>
      <HeaderContainer />
      <MenuSidebar />
      <main className='main'>
        <Routes>
          <Route path="/profile" element={<ProfilePageContainer />} >
            <Route path=":userId" element={<ProfilePageContainer />} />
          </Route>
          <Route path="/messaging/*" element={<MessagingPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<UnavailablePage />} />
        </Routes>
      </main>
      <Sidebar />
      <Footer />
    </div >)
}

export default App
