let appVersion = '1.0.0'
let BASE_URL = ''

if (process.env.NODE_ENV === 'development') {
	// 开发环境
	BASE_URL = 'http://124.71.63.67:8061'
} else {
	// 生产环境
	BASE_URL = 'http://124.71.63.67:8061'
}

export {
	BASE_URL,
}
