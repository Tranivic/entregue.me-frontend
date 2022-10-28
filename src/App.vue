<template>
<AppHeader />
<app-main>
    <CarouselSlider />
</app-main>
</template>

<script>
import AppHeader from "./components/AppHeader/AppHeader.vue";
import AppMain from "./components/AppMain/AppMain.vue";

export default {
    name: "App",
    components: {
        AppHeader,
        AppMain,
    },
};
</script>

<style lang="scss">
@import "./scss/global.scss";
</style>
