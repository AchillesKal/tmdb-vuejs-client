<script setup lang="ts">
import { ref, onMounted, computed } from "vue";

import { useMovieStore } from "../stores/movies";

interface Movie {
  original_title: string;
  poster_path: string;
}

const store = useMovieStore();

const movies = computed(() => {
  return store.movies;
});

onMounted(() => {
  store.fetchMovies();
});
</script>

<template>
  <div class="most-popular">
    <div class="container mx-auto">
      <div class="title">
        <h2>What Is Popular</h2>
        <div class="w-full flex gap-10 overflow-x-auto py-14">
          <div
            class="shrink-0 first:pl-6 last:pr-6"
            v-for="(movie, index) in movies"
            :key="index"
          >
            {{ movie.original_title }}
            <img :src="`https://image.tmdb.org/t/p/w185${movie.poster_path}`" />
          </div>
        </div>
      </div>
      <MovieSearchForm />
    </div>
  </div>
</template>
