
import { getDateNowInString } from '../helpers'
import { ADD_MESSAGE, ADD_POST, UPDATE_MESSAGE, UPDATE_POST } from './actions'

let store = {
  _callSubscriber() { },
  _state: {
    profilePage: {
      posts: [
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
          date: '2021-06-10T09:18:56',
          likeCount: 145
        },
      ],
      newPostText: ''
    },
    messagingPage: {
      penfriends: [
        {
          id: 1,
          name: 'Den',
          avatar: `${require('../assets/images/default_avatar.jpg')}`
        },
        {
          id: 2,
          name: 'Bob',
          avatar: `${require('../assets/images/samurai_2.jpg')}`
        },
        {
          id: 3,
          name: 'Carolina',
          avatar: `${require('../assets/images/geisha.jpg')}`
        },
        {
          id: 4,
          name: 'Emma',
          avatar: `${require('../assets/images/geisha2.jpg')}`
        },
        {
          id: 5,
          name: 'John Doe'
        },
      ],
      correspondence: [
        {
          id: 1,
          message: 'Hey! How are you?',
          avatar: `${require('../assets/images/geisha2.jpg')}`,
          date: '2020-11-14T18:02:00'
        },
        {
          id: 2,
          message: "Thank you. I'm fine.",
          avatar: `${require('../assets/images/default_avatar.jpg')}`,
          date: '2022-05-03T18:02:00'
        },
        {
          id: 3,
          message: "What's the latest news?",
          avatar: `${require('../assets/images/geisha2.jpg')}`,
          date: '2021-08-22T18:02:00'
        },
        {
          id: 4,
          message: 'Grass in the yard, firewood on the grass',
          avatar: `${require('../assets/images/default_avatar.jpg')}`,
          date: '2021-11-11T18:02:00'
        },
        {
          id: 5,
          message: 'Test 404 avatar',
          date: '2021-01-18T18:02:00'
        }
      ],
      newMessageText: ''
    },
  },

  subscribe(observer) {
    this._callSubscriber = observer
  },
  getState() { return this._state },


  _addPost() {
    const today = getDateNowInString()
    const postsLength = this._state.profilePage.posts.length
    const newPost = {
      id: postsLength + 1,
      message: this._state.profilePage.newPostText,
      date: today,
      likeCount: 0
    }

    this._state.profilePage.posts.push(newPost)
    this._callSubscriber(this._state)
  },
  _addMessage() {
    const today = getDateNowInString()
    const messagesLength = this._state.messagingPage.correspondence.length
    const newMessage = {
      id: messagesLength + 1,
      message: this._state.messagingPage.newMessageText,
      date: today,
      avatar: `${require('../assets/images/default_avatar.jpg')}`
    }

    this._state.messagingPage.correspondence.push(newMessage)
    this._callSubscriber(this._state)
  },
  _updatePost(newNote) {
    this._state.profilePage.newPostText = newNote
    this._callSubscriber(this._state)
  },
  _updateMessage(newNote) {
    this._state.messagingPage.newMessageText = newNote
    this._callSubscriber(this._state)
  },

  dispatch(action) {
    switch (action.type) {
      case ADD_POST:
        this._addPost()
        break
      case ADD_MESSAGE:
        this._addMessage()
        break
      case UPDATE_POST:
        this._updatePost(action.newNote)
        break
      case UPDATE_MESSAGE:
        this._updateMessage(action.newNote)
        break
      default:
        this.getState()
        break
    }
  }
}

window.state = store

export default store