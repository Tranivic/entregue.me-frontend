<template>
  <app-header></app-header>
</template>

<script>
import AppHeader from './layouts/AppHeader/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
  },
};
</script>

<style lang="scss">
@import './assets/scss/global.scss';
</style>
