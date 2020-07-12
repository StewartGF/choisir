import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "@/components/Landing.vue";
import Anime from "@/components/Anime.vue";
import Juegos from "@/components/Juegos.vue";
import Series from "@/components/Series.vue";

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
  {
    path: "/juegos",
    name: "Juegos",
    component: Juegos,
  },
  {
    path: "/series",
    name: "Series",
    component: Series,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
