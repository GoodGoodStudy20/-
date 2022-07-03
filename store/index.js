import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
	state: {
		userInfo: uni.getStorageSync('userInfo') || {},

	},
	mutations: {
		SETUSERINFO(state, userInfo) {
			state.userInfo = userInfo
		},
	}
})

export {
	store
}