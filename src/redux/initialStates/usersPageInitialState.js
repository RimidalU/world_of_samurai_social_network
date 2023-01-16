let usersPageInitialState = {
  users: [
    {
      id: 1,
      fullName: 'Den',
      avatar: `${require('../../assets/images/default_avatar.jpg')}`,
      status: 'Lorem ipsum dolor sit ',
      location: {
        country: 'Belarus',
        cityName: 'Minsk'
      },
      followed: true
    },
    {
      id: 2,
      fullName: 'Bob',
      avatar: `${require('../../assets/images/samurai_2.jpg')}`,
      status: 'User status',
      location: {
        country: 'Belarus',
        cityName: 'Minsk'
      },
      followed: false
    },
    {
      id: 3,
      fullName: 'Carolina',
      avatar: `${require('../../assets/images/geisha.jpg')}`,
      status: 'User status',
      location: {
        country: 'Belarus',
        cityName: 'Minsk'
      },
      followed: true
    },
    {
      id: 4,
      fullName: 'Emma',
      avatar: `${require('../../assets/images/geisha2.jpg')}`,
      status: null,
      location: {
        country: 'Belarus',
        cityName: 'Minsk'
      },
      followed: false
    },
    {
      id: 5,
      fullName: 'John Doe',
      status: 'User status',
      location: {
        country: 'Belarus',
        cityName: 'Minsk'
      },
      followed: true
    },
  ]
}

export default usersPageInitialState