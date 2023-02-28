export default {
  namespaced: true,
  state: {
    typeOfAuthForm: 'login',
    token: null,
    user: null,
  },
  getters: {
    userIsAuthenticated(state) {
      return !!state.token;
    },
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {},
};
