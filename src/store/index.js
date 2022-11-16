import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    products: [],
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
  getters: {
    getProducts(state) {
      return state.products;
    },
  },
});

export default store;
