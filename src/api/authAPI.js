import instanceAxios from './instanceAxios'

const authAPI = {
  async login() {
    return instanceAxios.get(`auth/me`)
      .then(response => {
        return response.data
      })
  }

}

export default authAPI