let messagingPageInitialState = {
  penfriends: [
    {
      id: 1,
      name: 'Den',
      avatar: `${require('../../assets/images/default_avatar.jpg')}`
    },
    {
      id: 2,
      name: 'Bob',
      avatar: `${require('../../assets/images/samurai_2.jpg')}`
    },
    {
      id: 3,
      name: 'Carolina',
      avatar: `${require('../../assets/images/geisha.jpg')}`
    },
    {
      id: 4,
      name: 'Emma',
      avatar: `${require('../../assets/images/geisha2.jpg')}`
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
      avatar: `${require('../../assets/images/geisha2.jpg')}`,
      date: '2020-11-14T18:02:00'
    },
    {
      id: 2,
      message: "Thank you. I'm fine.",
      avatar: `${require('../../assets/images/default_avatar.jpg')}`,
      date: '2022-05-03T18:02:00'
    },
    {
      id: 3,
      message: "What's the latest news?",
      avatar: `${require('../../assets/images/geisha2.jpg')}`,
      date: '2021-08-22T18:02:00'
    },
    {
      id: 4,
      message: 'Grass in the yard, firewood on the grass',
      avatar: `${require('../../assets/images/default_avatar.jpg')}`,
      date: '2021-11-11T18:02:00'
    },
    {
      id: 5,
      message: 'Test 404 avatar',
      date: '2021-01-18T18:02:00'
    }
  ],
  newMessageText: ''
}

export default messagingPageInitialState