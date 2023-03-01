export default {
  namespaced: true,
  state: {
    products: [],
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
      console.log('products', state.products)
    },
  },
  actions: {
    async fetchAllProducts(context) {
      const response = await fetch('http://localhost:8081/api/v1/products');
      const data = await response.json();
      context.commit('setProducts', data.products);
    },
  },
};
