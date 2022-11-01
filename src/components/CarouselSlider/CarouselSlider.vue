<template>
  <carousel class="carousel" :items-to-show="8">
    <slide class="slide" v-for="slide in 20" :key="slide">
      <div class="filter">
        <h1 class="slide-name">Pão de açucar com salgado</h1>
      </div>
    </slide>
    <template #addons>
      <navigation />
      <!-- <Pagination> not used -->
    </template>
  </carousel>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation} from "vue3-carousel";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Carousel,
    Slide,
    Navigation,
  },
};
</script>

<style lang="scss">
@import "./CarouselSlider"
</style>
