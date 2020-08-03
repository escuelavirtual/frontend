import axios from "axios"

const clientAxios = axios.create({
    baseURL : "https://localhost:4000/api"
})

export default clientAxios