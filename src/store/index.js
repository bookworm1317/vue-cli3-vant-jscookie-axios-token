/*
 * @Description: store配置
 * @Author: 丶
 * @Date: 2020-03-11 17:00:00
 * @LastEditors  : 丶
 * @LastEditTime : 2020-03-11 17:00:00
 */

import Vue from "vue"
import Vuex from "vuex"

/**
	Vuex持久化存储之vuex-persist
	Vuex 解决了多视图之间的数据共享问题。但是运用过程中又带来了一个新的问题是，
	Vuex 的状态存储并不能持久化。也就是说当你存储在 Vuex 中的 store 里的数据，
	只要一刷新页面，数据就丢失了。
	引入vuex-persist 插件，它就是为 Vuex 持久化存储而生的一个插件。
	不需要你手动存取 storage ，而是直接将状态保存至 cookie 或者 localStorage 中
 */
import VuexPersistence from "vuex-persist"

import { SET_TOKEN, SET_MOBILE, SET_AGREE, SET_USER_ID, SET_FROM, SET_URL, SET_IMPROVE,SET_IM,SET_APPLY } from "./mutatiosType"

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    userId: "",
    mobile: "",
    token: "",
    isAgree: 2,
    isImprove: 2,
    from: "demand",
    applyInfo: {
      name: '',
      idCard: ''
    },
    url: {
      tenantId: "",
      appId: "",
      tenantId1: "",
      deptId: ''
    },
    imInfo: {
      toCardId: '',
      fromCardId: ''
    }
  },
  mutations: {
    [SET_TOKEN](state, payload) {
      state.token = payload
    },
    [SET_MOBILE](state, payload) {
      state.mobile = payload
    },
    [SET_AGREE](state, payload) {
      state.isAgree = payload
    },
    [SET_USER_ID](state, payload) {
      state.userId = payload
    },
    [SET_FROM](state, payload) {
      state.from = payload
    },
    [SET_URL](state, payload) {
      state.url = { ...state.url, ...payload }
    },
    [SET_IMPROVE](state, payload) {
      state.isImprove = payload
    },
    [SET_IM](state,payload){
      state.imInfo = { ...state.imInfo, ...payload }
    },
    [SET_APPLY](state,payload){
      state.applyInfo = { ...state.applyInfo, ...payload }
    }
  },
  actions: {
    setToken({ commit }, payload) {
      commit(SET_TOKEN, payload)
    },
    setMobile({ commit }, payload) {
      commit(SET_MOBILE, payload)
    },
    setAgree({ commit }, payload) {
      commit(SET_AGREE, payload)
    },
    setUserId({ commit }, payload) {
      commit(SET_USER_ID, payload)
    },
    setFrom({ commit }, payload) {
      commit(SET_FROM, payload)
    },
    setUrl({ commit }, payload) {
      commit(SET_URL, payload)
    },
    setImprove({ commit }, payload) {
      commit(SET_IMPROVE, payload)
    },
    setIm({ commit }, payload) {
      commit(SET_IM, payload)
    },
    setApply({ commit }, payload) {
      commit(SET_APPLY, payload)
    }
  },
  plugins: [vuexLocal.plugin]
})
