import axios from 'axios'

class UsersService {

    constructor() {

        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/user` })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem('authToken')

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getAllUsers = () => {
        return this.api.get('/all')
    }

    getOneUser = id => {
        return this.api.get(`/${id}`)
    }

    deleteUser = id => {
        return this.api.delete(`/${id}/delete`)
    }

    updateOneUser = (id, userData) => {
        return this.api.put(`/${id}/edit`, userData)
    }
}

const usersService = new UsersService()
export default usersService