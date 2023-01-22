import axios from 'axios'

const instanceAxios = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '3a85fa12-3a31-4f05-9860-0522a4d39480'
  }
})

export default instanceAxios