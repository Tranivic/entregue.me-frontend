<template>
  <app-header></app-header>
  <side-menu v-if="sideMenuIsOpen"></side-menu>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import AppHeader from './layouts/AppHeader/AppHeader.vue';
import SideMenu from './layouts/SideMenu/SideMenu.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    SideMenu,
  },
  created() {
    console.log(this.sideMenuIsOpen);
  },
  watch: {
    sideMenuIsOpen(newValue) {
      console.log('sideMenuIsOpen changed');
      console.log(newValue);
    },
  },
  computed: {
    sideMenuIsOpen() {
      return this.$store.state.sideMenuIsOpen;
    },
  },
};
</script>

<!-- Dont scope de app -->
<style lang="scss">
@import './assets/scss/global.scss';
</style>
