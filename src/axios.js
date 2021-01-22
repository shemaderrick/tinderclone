import axios from "axios"

const instance = axios.create({
 baseURL:"https://tinderback-end1.herokuapp.com/",
})
export default instance