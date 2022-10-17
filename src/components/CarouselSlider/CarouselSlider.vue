<template lang="">
    <carousel class="carousel" :items-to-show="8">
      <slide v-for="slide in 10" :key="slide">
        <h1>exemple</h1>
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
//Pagination not used yet

export default {
  name: "App",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
};
</script>

<style lang="scss">
@import "./carouselslider";
</style>
