import qs from 'qs'

import {
	store
} from '../store/index.js'
const {
	accessToken,
} = store.state.userInfo

function request(obj) {

	return new Promise((resolve, reject) => {
		// 监听有没有网络
		uni.getNetworkType({
			success(res) {
				if (res.networkType == 'none') {
					uni.showToast({
						icon: 'none',
						title: '网路不佳'
					})
				} else {
					reqHttps()
				}
			}
		})

		// 切换网路监听
		uni.onNetworkStatusChange(function(res) {
			if (res.networkType == 'none') {
				uni.showToast({
					icon: 'none',
					title: '网路不佳'
				})
			} else {
				reqHttps()
			}
		});

		function reqHttps() {
			const method = obj.method || "GET";
			const url = obj.url || "";
			const data = obj.data || {};
			const header = obj.header || {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				// 'x-token': accessToken || ''
				// 'x-token': 'eban6622:eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7XCJpZFwiOjIyLFwicmVkaXNVc2VyS2V5XCI6XCJlYmFuNjYyMlwifSIsImV4cCI6MTY1MDk2ODc5NywiPjw_XCI6e30rQ1ZCTllIQl8pKComJSQhfn4hQCMlXiYqKClHVkJOU1hDVmJ3ZXJmZ2hqayI6InR4NHZpbSIsImlhdCI6MTY1MDM2Mzk5N30.026n8sdLWGVjJExtwfA1lEhgHi6v3akPUHaBjCGou4XG_N7jtDoMsxAVuOhwerwSIQZEmkYq5HxOLOb3aakgNA'

			};
			const success = obj.success; // 成功回调函数
			const fail = obj.fail; //表示失败后，要执行的回调函数
			uni.request({
				url: url,
				data: data || {},
				method: method,
				header: header,
				dataType: 'json',
				success: ((res) => {
					if (res.data.code !== 200) {
						uni.hideLoading()
						if (res.data.error_code == 401) {
							uni.reLaunch({
								url: '/pages/login/index'
							})
							return uni.showToast({
								icon: 'none',
								title: res.data.msg || "请重新登录"
							})
						}
						return uni.showToast({
							icon: 'none',
							title: res.data.msg || "请求失败"
						})
					}
					resolve(res.data.data)
				}),
				fail: ((err) => {
					uni.hideLoading()
					uni.showToast({
						icon: 'none',
						title: err.errMsg || "接口请求失败"
					})
					reject(err)
				})
			})
		}

	})
}


export {
	request
}
