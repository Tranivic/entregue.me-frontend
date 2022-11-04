<template>
  <Carousel :settings="settings" :breakpoints="breakpoints" >
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">Exemplo aqui...</div>
    </Slide>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'CarouselSlider',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({

    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
      mouseDrag: true,
    },
    
    // Carousel breakpoints
    breakpoints: {
      700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
        mouseDrag: false,
      },
      1024: {
        itemsToShow: 5,
        snapAlign: 'start',
        mouseDrag: false,
      },
    },
  }),
})
</script>

<!-- Dont scope the carousel -->
<style lang="scss">
@import '_CarouselSlider.scss';
</style>