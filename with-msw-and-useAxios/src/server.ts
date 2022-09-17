import axios from 'axios'
import {makeUseAxios} from 'axios-hooks'
import LRU from 'lru-cache'

export const axiosInstance = axios.create({baseURL: '/'})

const cache = new LRU({ max: 10 })

export const useServer = makeUseAxios({
	axios: axiosInstance,
	cache
})

export const paths = {
	appointments: '/api/appointments',
	login: '/api/login',
	clientId: '/api/clinics/',
}
