import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "@/components/Landing.vue";
import Anime from "@/components/Anime.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/anime",
    name: "Anime",
    component: Anime,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
