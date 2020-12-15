import axios from 'axios' 

const apiBase = process.env.REACT_APP_BASE_API_URL  

const instance = axios.create({
    baseURL: apiBase,  
})

instance.interceptors.response.use( (response) => {
    if (response.data) return response.data
    return response
}, (error) => { 
    console.log(error)
    return Promise.reject(error.response.data)
})

export default instance