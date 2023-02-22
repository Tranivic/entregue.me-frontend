import { createStore } from 'vuex';
import productsModule from './modules/products.js';

const store = createStore({
  modules: {
    prods: productsModule,
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
