import { createApp } from "vue";
import store from "./store";
import App from "./App.vue";
import ProductCard from "./components/ProductCard/ProductCard.vue";

const app = createApp(App);

app.component("ProductCard", ProductCard);
app.use(store);
app.mount("#app");
