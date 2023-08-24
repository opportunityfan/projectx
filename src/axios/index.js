import axios from 'axios'

const API = axios.create({
  baseURL: 'http://192.168.1.102:8080',
  timeout: 2000
})

export default API
