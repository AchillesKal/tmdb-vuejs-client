import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/movie/:movieId",
      name: "movie",
      // route level code-splitting
      // this generates a separate chunk (Movie.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/MovieView.vue"),
    },
    {
      path: "/search/:searchTerm",
      name: "search",
      // route level code-splitting
      // this generates a separate chunk (Movie.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/SearchView.vue"),
    },
  ],
});

export default router;
