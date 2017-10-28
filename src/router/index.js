import Vue from 'vue';
import Router from 'vue-router';
import Homepage from '@/components/Homepage';
import About from '@/components/About';
import TopRated from '@/components/TopRated';
import Movie from '@/components/Movie';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/top',
      name: 'Top',
      component: TopRated,
    },
    {
      path: '/movie/:id',
      name: 'Movie',
      component: Movie,
    },
  ],
});
