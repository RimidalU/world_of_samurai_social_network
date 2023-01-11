import React from 'react'
import { Routes, Route } from "react-router-dom"

import Footer from './layouts/Footer/Footer'
import MenuSidebar from './layouts/MenuSidebar/MenuSidebar'
import Sidebar from './layouts/Sidebar/Sidebar'
import Header from './layouts/Header/Header'
import MessagingPage from './pages/MessagingPage/MessagingPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import NewsPage from './pages/NewsPage/NewsPage'
import MusicPage from './pages/MusicPage/MusicPage'
import SettingsPage from './pages/SettingsPage/SettingsPage'
import UnavailablePage from './pages/UnavailablePage/UnavailablePage'

import './App.css'

function App({ state, addPostToState, updatePostText, addMessageToState, updateMessageText }) {
  return (
    <div className='App'>
      <Header />
      <MenuSidebar />
      <main className='main'>
        <Routes>
          <Route path="/" element={<ProfilePage
            state={state.profilePage}
            addPostToState={addPostToState}
            updatePostText={updatePostText}
          />}
          />
          <Route path="/messaging/*" element={<MessagingPage
            state={state.messagingPage}
            addMessageToState={addMessageToState}
            updateMessageText={updateMessageText}
          />}
          />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<UnavailablePage />} />
        </Routes>
      </main>
      <Sidebar />
      <Footer />
    </div>)
}

export default App
