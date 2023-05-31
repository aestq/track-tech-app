import axios from 'axios'
import { type UserData } from 'entities/User'
import { LOCAL_STORAGE_TOKEN_KEY } from 'shared/consts/localStorage'

export const $api = axios.create({
  baseURL: __API__ + '/api',
  withCredentials: true
})

$api.interceptors.request.use((config) => {
  const token = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)
  config.headers.Authorization = `Bearer ${token ?? ''}`
  return config
})

$api.interceptors.response.use(config => config, async (error) => {
  const originalRequest = error.config
  if (error.response.status === 401 && error.config && !error.config._isRetry) {
    try {
      const response = await axios.get<UserData>(__API__ + '/api/auth/refresh', { withCredentials: true })
      localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, response.data.accessToken)
      return await $api.request(originalRequest)
    } catch (error) {
      console.log('interceptor', error)
    }
  }
  throw error
})
