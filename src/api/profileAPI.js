import instanceAxios from './instanceAxios'

const profileAPI = {
  async getProfile(userId) {
    return instanceAxios.get(`profile/${userId ?? 11}`)
      .then(response => {
        return response.data
      })
  }
}

export default profileAPI