import instanceAxios from './instanceAxios'

const subscriptionsAPI = {
  async subscribeToUser(id) {
    return instanceAxios.post(`follow/${id}`)
      .then(response => {
        return response.data
      })
  },

  async unfollowUser(id) {
    return instanceAxios.delete(`follow/${id}`)
      .then(response => {
        return response.data
      })
  }
}

export default subscriptionsAPI