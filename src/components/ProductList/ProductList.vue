<template>
  <section class="list-container">
    <ul class="list">
      <ProductCard v-for="product in showProducts" :key="product.name" :product="product" />
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      allProducts: [],
    };
  },

  methods: {
    fetchCurrentPage() {
      this.$store.dispatch("fetchProducts", this.currentPage);
    },
  },
  computed: {
    showProducts() {
      return this.$store.getters.getProducts;
    },
  },
  mounted() {
    this.fetchCurrentPage();
  },
};
</script>

<style lang="scss" scoped>
@import "./ProductList";
</style>
