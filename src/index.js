import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'

import './index.css'

const posts = [
  {
    id: 1,
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aliquam minus laboriosam dolore cum ut dignissimos adipisci natus expedita incidunt? Error repellat facilis, in modi ducimus qui consectetur? Voluptas, laboriosam.',
    date: '2021-11-11T18:02:12',
    likeCount: 12
  },
  {
    id: 2,
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aliquam minus laboriosam dolore cum ut dignissimos adipisci natus expedita incidunt?',
    date: '2021-11-11T18:02:00',
    likeCount: 25
  },
  {
    id: 3,
    message: 'Error repellat facilis, in modi ducimus qui consectetur? Voluptas, laboriosam.',
    date: '2021-06-10T09:18:56',
    likeCount: 89
  },
  {
    id: 4,
    message: 'Doloribus aliquam minus laboriosam dolore cum ut dignissimos adipisci natus expedita incidunt? Error repellat facilis, in modi ducimus qui consectetur? Voluptas, laboriosam.',
    date: '2023-01-11T18:07:44',
    likeCount: 145
  },
]

const penfriends = [
  {
    id: 1,
    name: 'Den',
    avatar: `${require('./assets/images/default_avatar.jpg')}`
  },
  {
    id: 2,
    name: 'Bob',
    avatar: `${require('./assets/images/samurai_2.jpg')}`
  },
  {
    id: 3,
    name: 'Carolina',
    avatar: `${require('./assets/images/geisha.jpg')}`
  },
  {
    id: 4,
    name: 'Emma',
    avatar: `${require('./assets/images/geisha2.jpg')}`
  },
  {
    id: 5,
    name: 'John Doe'
  },
]

const correspondence = [
  {
    id: 1,
    message: 'Hey! How are you?',
    avatar: `${require('./assets/images/geisha2.jpg')}`,
    date: '2020-11-14T18:02:00'
  },
  {
    id: 2,
    message: "Thank you. I'm fine.",
    avatar: `${require('./assets/images/default_avatar.jpg')}`,
    date: '2022-05-03T18:02:00'
  },
  {
    id: 3,
    message: "What's the latest news?",
    avatar: `${require('./assets/images/geisha2.jpg')}`,
    date: '2021-08-22T18:02:00'
  },
  {
    id: 4,
    message: 'Grass in the yard, firewood on the grass',
    avatar: `${require('./assets/images/default_avatar.jpg')}`,
    date: '2021-11-11T18:02:00'
  },
  {
    id: 5,
    message: 'Test 404 avatar',
    date: '2021-01-18T18:02:00'
  }
]

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App posts={posts} penfriends={penfriends} correspondence={correspondence} />
    </BrowserRouter>
  </React.StrictMode>
);

