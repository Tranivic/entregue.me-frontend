<template>
<section class="menu">
    <div class="filter">
        <h1 class="title">Cardápio</h1>
        <carousel-slider></carousel-slider>
    </div>
    <div class="list">
        <h1 class="title">Produtos</h1>
        <product-list></product-list>
    </div>
</section>
</template>

<script>
import CarouselSlider from '../../components/CarouselSlider/CarouselSlider.vue';
import ProductList from '../../components/ProductList/ProductList.vue';

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
@import './HomeView';
</style>
