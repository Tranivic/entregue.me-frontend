<template>
<app-header></app-header>
<side-menu></side-menu>
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
};
</script>

<style lang="scss">
@import './assets/scss/global.scss';
</style>
