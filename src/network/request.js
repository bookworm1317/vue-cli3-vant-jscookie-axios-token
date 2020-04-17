import axios from 'axios'

import {
	Toast
} from 'vant';
import router from '@/router/index';

import {
	getToken,
	removeToken
} from '@/utils/common/auth'

export function request(config) {
	// 1.创建axios的实例
	const instance = axios.create({
		baseURL: 'http://vuedemo.jitaogo.top',
		timeout: 5000
	})

	// 2.axios的拦截器
	// 2.1.请求拦截的作用
	instance.interceptors.request.use(config => {
		
		// 获取token
		const token = getToken()
		token && (config.headers.Authorization = token)
		return config
	}, err => {
		return Promise.reject(err);
	})

	// 2.2.响应拦截
	instance.interceptors.response.use(res => {
		return res.data
	}, err => {
		Toast.fail({
			message: err.message,
			duration: 1.5 * 1000
		})
		return Promise.reject(err)
	})

	// 3.发送真正的网络请求
	return instance(config)
}
