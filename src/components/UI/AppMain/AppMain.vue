<template>
  <main>
    <section class="menu">
      <div class="filter">
        <h1 class="title">Cardápio</h1>
        <CarouselSlider/>
      </div>
      <div class="list">
        <h1 class="title">Produtos</h1>
        <ProductList />
      </div>
    </section>
  </main>
</template>

<script>
import CarouselSlider from "../../CarouselSlider/CarouselSlider.vue";
import ProductList from "../../ProductList/ProductList.vue";

export default {
  data() {
    return {};
  },
  components: {
    CarouselSlider,
    ProductList,
  },
};
</script>

<style lang="scss" scoped>
@import "./AppMain";
</style>
