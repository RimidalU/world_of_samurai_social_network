import React from 'react'

import Post from '../Post/Post'

import styles from './PostsSet.module.css'
const fakePosts = [
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

const PostsSet = () => {
  return (
    <ul className={styles.wrapper}>
      {
        fakePosts.map(post => (
          <li key={post.id} className={styles.post}>
            <Post {...post} />
          </li>
        ))
      }
    </ul >
  )
}

export default PostsSet