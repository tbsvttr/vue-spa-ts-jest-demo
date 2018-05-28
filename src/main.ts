import "@/assets/main.scss";
import Vue, { CreateElement, VNode } from "vue";
import App from "./App.vue";
import { router } from "./router";
import { store } from "./store";

Vue.config.productionTip = false;

new Vue({
  render: (h: CreateElement): VNode => h(App),
  router,
  store
}).$mount("#app");
