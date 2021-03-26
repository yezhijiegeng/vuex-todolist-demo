import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add (state) {
      state.count++
    },
    addN (state, step) {
      state.count += step
    },
    sub (state) {
      state.count--
    },
    subN (state, step) {
      state.count -= step
    }
  },
  actions: {
    addAsync (context) {
      setTimeout(function () {
        context.commit('add')
      }, 1000)
    },
    addNAsync (context, step) {
      setTimeout(function () {
        context.commit('addN', step)
      }, 1000)
    },
    subAsync (context) {
      setTimeout(function () {
        context.commit('sub')
      }, 1000)
    },
    subNAsync (context, step) {
      setTimeout(function () {
        context.commit('subN', step)
      }, 1000)
    }
  },
  getters: {
    showNum (state) {
      return '当前最新数量是[' + state.count + ']'
    }
  }
})
