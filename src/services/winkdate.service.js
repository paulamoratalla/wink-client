import axios from 'axios'

class WinkdateService {

    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/winkdate` })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken")

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    createOneWinkdate = data => {
        return this.api.post('/create', data)
    }

    getAllWinkdates = () => {
        return this.api.get('/list')
    }

    getOneWinkdate = _id => {
        return this.api.get(`/${_id}`)
    }
}

const winkdateService = new WinkdateService()
export default winkdateService