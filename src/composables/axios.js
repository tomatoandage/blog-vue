import axios from "axios"

//创建Axios实例
const instance = axios.create({
	baseURL: "/api",
	timeout: 7000
})

export default instance