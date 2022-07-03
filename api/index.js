import {
	BASE_URL
} from '@/config/config.js'

import {
	request
} from '@/utils/request.js'

// 学校
export function queryOpenStuSchool(data) {
	return request({
		url: BASE_URL + '/swagger-system/wxApi/queryOpenStuSchool',
		method: 'POST',
		data,
	})
}