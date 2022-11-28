<template>
<AppHeader />
<AppMain />
</template>

<script>
import AppHeader from "./components/UI/AppHeader/AppHeader.vue";
import AppMain from "./components/UI/AppMain/AppMain.vue";

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
