const state = {
	settings: {
		show12HourTimeFormat: false,
		showTasksInOneList: false
	}
}

const mutations = {
	setShow12HourTimeFormat(state, value){
		state.settings.show12HourTimeFormat = value
	},
	setShowTasksInOneList(state, value){
		state.settings.showTasksInOneList = value
	},
}

const actions = {
	setShow12HourTimeFormat({ commit }, value) {
		commit('setShow12HourTimeFormat', value)
	},
	setShowTasksInOneList({ commit }, value) {
		commit('setShowTasksInOneList', value)
	},
}

const getters = {
	settings: state => {
		return state.settings
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}