<script setup lang="ts">
import HomeBanner from "../components/HomeBanner.vue";
import MovieSlider from "../components/MovieSlider.vue";

import { onMounted, computed } from "vue";

import { useMovieStore } from "../stores/movies";

const store = useMovieStore();

const mostPopularMovies = computed(() => {
  return store.mostPopularMovies;
});
const latestMovies = computed(() => {
  return store.topRatedMovies;
});

onMounted(() => {
  store.fetchMostPopularMovies();
  store.fetchTopRatedMovies();
});
</script>

<template>
  <main>
    <HomeBanner />
  </main>
  <MovieSlider :movieItems="mostPopularMovies" title="Popular" />

  <MovieSlider :movieItems="latestMovies" title="Top Rated" />
</template>
