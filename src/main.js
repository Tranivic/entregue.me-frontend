import { createApp } from "vue";
import store from "./store";
import router from "./router/index";
import App from "./App.vue";

const app = createApp(App);
app.use(store).use(router).mount("#app");
