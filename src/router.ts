import { routes } from "@/router/routes";
import Vue from "vue";
import VueRouter, { RouterOptions } from "vue-router";

Vue.use(VueRouter);

const routerOptions: RouterOptions = {
  routes
};

export const router: VueRouter = new VueRouter(routerOptions);

const router2: VueRouter = new Vue({});
