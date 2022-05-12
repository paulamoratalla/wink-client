import axios from 'axios'

class TestService {

    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/places` })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken")

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }
    createOneTest = test => {
        return this.api.post('/new', test)
    }

    getAllTests = () => {
        return this.api.get('/all')
    }

    getOneTest = id => {
        return this.api.get(`/${id}`)

    }

    deleteOneTest = id => {
        return this.api.delete(`/${id}/delete`)
    }

    updateOneTest = (id, data) => {
        return this.api.put(`/${id}/edit`, data)

    }
}

const testService = new TestService()
export default testService

