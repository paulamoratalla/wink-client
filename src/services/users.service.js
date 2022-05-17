import axios from 'axios'

class UsersService {

    constructor() {

        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/user` })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken")

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getAllUsers = () => {
        return this.api.get('/all')
    }

    getOneUser = (_id) => {
        return this.api.get(`/${_id}`)
    }

    getMyDetails = () => {
        return this.api.get('/profile')
    }

    deleteUser = (_id) => {
        return this.api.delete(`/${_id}/delete`)
    }

    updateOneUser = (_id, userData) => {
        return this.api.put(`/${_id}/edit`, userData)
    }
}

const usersService = new UsersService()
export default usersService