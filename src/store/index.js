import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        data: localStorage.getItem('bmi'),
        num: localStorage.getItem('num')
    },
    getters: {
        getBmi(state) {
            return state.data
        }
    },
    actions: {
        setBmi({ commit, state }, result) {
            commit('setdata', result)
        },
        setNum({ commit, state }, result) {
            commit('setnum', result)
        }
    },
    mutations: {
        setdata(state, result) {
            state.data = result
        },
        setnum(state, result) {
            state.num = result
        }
    }
})

export default store