import axios from "axios";
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
    SET_PRODUCTS(state, payLoad) {
      state.products = payLoad.products;
    },
  },
  actions: {
    fetchProducts(context, currentPage) {
      axios
        .get(`http://localhost:8080/api/v1/products?page=${currentPage}`)
        .then((response) => {
          context.commit("SET_PRODUCTS", response.data);
        })
        .catch((error) => {
          console.warn(error);
        });
    },
  },
};
