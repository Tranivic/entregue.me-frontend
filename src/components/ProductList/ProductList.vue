<template>
<section class="list-container">
    <ul class="list">
        <ProductCard v-for="product in showProducts" :key="product.id" :product="product" />
    </ul>
</section>
</template>

<script>
export default {
    data() {
        return {
            currentPage: 1,
        };
    },

    methods: {
        fetchCurrentPage() {
            this.$store.dispatch("prods/fetchProducts", this.currentPage);
        },
    },
    computed: {
        showProducts() {
            return this.$store.getters['prods/getProducts']
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
