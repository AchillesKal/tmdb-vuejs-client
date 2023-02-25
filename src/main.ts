import { createApp } from "vue";
import { VueQueryPlugin } from "@tanstack/vue-query";

import "./index.css";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(VueQueryPlugin);
app.use(router);

app.mount("#app");
