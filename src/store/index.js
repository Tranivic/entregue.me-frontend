import { createStore } from 'vuex';
import productsModule from './modules/products.js';
import authModule from './modules/auth.js';

const store = createStore({
  modules: {
    products: productsModule,
    auth: authModule,
  },
  state: {
    sideMenuIsOpen: false,
  },
  mutations: {
    toggleSideMenu(state) {
      state.sideMenuIsOpen = !state.sideMenuIsOpen;
    },
  },
  actions: {
    toggleSideMenu(context) {
      context.commit('toggleSideMenu');
    },
  },
});

export default store;
