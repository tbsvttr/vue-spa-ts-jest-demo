import Home from "@/views/Home.vue";
import NotFound from "@/views/NotFound.vue";
import Posts from "@/views/Posts.vue";
import { RouteConfig } from "vue-router";

export const routes: RouteConfig[] = [
  {
    component: NotFound,
    name: "NotFound",
    path: "*"
  },
  {
    component: Home,
    name: "home",
    path: "/"
  },
  {
    component: Posts,
    name: "posts",
    path: "/posts"
  }
];
