<template>
<section class="list-container">
    <ul class="list">
        <product-card v-for="product in products" :key="product.id" :product="product"></product-card>
    </ul>
</section>
</template>

<script>
    import ProductCard from '../../components/ProductCard/ProductCard.vue';
export default {
    created () {
        this.$store.dispatch('products/fetchAllProducts');
        console.log(this.products)
    },
    data() {
        return {};
    },
    computed: {
        products() {
            return this.$store.getters['products/getProducts'];
        },
    },
    components: {
        ProductCard,
    },
};
</script>

<style lang="scss" scoped>
@import './ProductList';
</style>
