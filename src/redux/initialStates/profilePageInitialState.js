let profilePageInitialState = {
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
  newPostText: '',

  userProfile: {
    userId: 1,
    aboutMe: 'Throughout your life advance daily, becoming more skillful than yesterday more skillful than today.',
    contacts: {},
    fullName: 'Uladzimir',
    lookingForAJob: true,
    lookingForAJobDescription: 'The best of works',
    photos: {
      large: `${require('../../assets/images/default_avatar.jpg')}`,
      small: ''
    }
  }
}

export default profilePageInitialState