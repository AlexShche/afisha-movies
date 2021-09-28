import axios from "axios"
import moment from "moment"

let instance: any = null

const {REACT_APP_API_ROOT, REACT_APP_API_URL} = process.env

const api = () => {
    const token = `frontend:${REACT_APP_API_URL}`
    const encodedToken = Buffer.from(token).toString("base64")
    const headers = {"Authorization": `Basic ${encodedToken}`}
    if (!instance) {
        instance = {
            movies: {
                all: () => axios.get(`${REACT_APP_API_ROOT}/?exists[shows]=true&shows.startedAt[after]=${moment().toISOString()}&groups[]=movie:genres&groups[]=genre:read&groups[]=movie:shows&groups[]=media_object:read&itemsPerPage=12`, {
                    headers
                })
            }
        }
    }
    return instance
}

export default api()