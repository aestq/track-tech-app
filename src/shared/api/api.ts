import axios from 'axios'
import { type UserData } from 'entities/User'
import { LOCAL_STORAGE_REFRESH_TOKEN_KEY, LOCAL_STORAGE_TOKEN_KEY } from 'shared/consts/localStorage'

export const $api = axios.create({
    baseURL: __API__ + '/api',
    withCredentials: true,
})

$api.interceptors.request.use((config) => {
    const token = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)
    config.headers.Authorization = `Bearer ${token ?? 'ddd'}`
    return config
})

interface QueueRequest {
    resolve: (token?: string) => void
    reject: (error: unknown) => void
}

let isRefreshing: boolean = false
let queueRequests: QueueRequest[] = []

const clearQueue = (error: unknown, token?: string) => {
    queueRequests.forEach((req) => {
        if (error) {
            req.reject(error)
        } else {
            req.resolve(token)
        }
    })

    queueRequests = []
}

$api.interceptors.response.use(
    (response) => {
        return response
    },
    async (error) => {
        const originalRequest = error.config

        if (error.response.status === 401 && !originalRequest._retry) {
            if (isRefreshing) {
                return await new Promise((resolve, reject) => {
                    queueRequests.push({ resolve, reject })
                })
                    .then(async (token) => {
                        originalRequest.headers.Authorization = 'Bearer ' + token
                        return await $api(originalRequest)
                    })
                    .catch(async (err) => {
                        return await Promise.reject(err)
                    })
            }

            originalRequest._retry = true
            isRefreshing = true

            try {
                const response = await axios.post<UserData>(
                    __API__ + '/api/auth/refresh',
                    { refreshToken: localStorage.getItem(LOCAL_STORAGE_REFRESH_TOKEN_KEY) ?? '' },
                    { withCredentials: true }
                )
                localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, response.data.accessToken)
                localStorage.setItem(LOCAL_STORAGE_REFRESH_TOKEN_KEY, response.data.refreshToken)
                clearQueue(null, response.data.accessToken)
                return await $api(originalRequest)
            } catch (e) {
                clearQueue(e)

                localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY)
                // window.location.replace('/')

                return await Promise.reject(e)
            } finally {
                isRefreshing = false
            }
        }

        return await Promise.reject(error)
    }
)
