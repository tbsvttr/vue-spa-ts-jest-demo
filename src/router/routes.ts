import About from "@/views/About.vue";
import Home from "@/views/Home.vue";
import Posts from "@/views/Posts.vue";
import { RouteConfig } from "vue-router";

export const routes: RouteConfig[] = [
  {
    component: Home,
    name: "home",
    path: "/"
  },
  {
    component: About,
    name: "about",
    path: "/about"
  },
  {
    component: Posts,
    name: "posts",
    path: "/posts"
  }
];
