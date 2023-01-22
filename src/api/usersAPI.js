import instanceAxios from './instanceAxios'

const usersAPI = {
  async getUsers(currentPage, pageSize) {
    return instanceAxios.get(`users/?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data
      })
  }

}

export default usersAPI