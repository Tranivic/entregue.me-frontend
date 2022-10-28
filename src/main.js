import { createApp } from 'vue'

import App from './App.vue';
import CarouselSlider from "./components/CarouselSlider/CarouselSlider.vue"


const app = createApp(App);

app.component('CarouselSlider', CarouselSlider)

app.mount('#app');
