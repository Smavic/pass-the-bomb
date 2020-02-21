import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: null,
    isLogin: false,
    nickname: null,
    socket: null,
    room: "",
    otherPlayers: {},
    bomb: 15,
  },
  getters: {
    getIsLogin(state) {
      return state.isLogin;
    },
    getNickname(state) {
      return state.nickname;
    },
    getSocket(state) {
      return state.socket;
    },
    getRoom(state) {
      return state.room;
    },
    getOtherPlayers(state) {
      return state.otherPlayers;
    },
    getBomb(state) {
      return state.bomb;
    }
  },
  mutations: {
    login(state, nickname) {
      state.nickname = nickname;
      state.isLogin = true;
    },
    setSocket(state, socket) {
      console.log(socket);
      state.socket = socket;
    },
    hitBomb(state, hit) {
      state.bomb -= Number(hit);
    }
  },
  actions: {
    login({ commit }, nickname) {
      commit("login", nickname);
    }
  },
  modules: {
  }
})
