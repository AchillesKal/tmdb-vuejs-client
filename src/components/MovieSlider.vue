<script setup lang="ts">
defineProps(['movieItems', 'title'])
</script>

<template>
  <div class="movie-slider">
    <div class="container mx-auto">
      <div class="title">
        <h2>What Is {{title}}</h2>
        <div class="w-full flex gap-10 overflow-x-auto py-14">
          <div
            class="shrink-0 first:pl-6 last:pr-6"
            v-for="(movie, index) in movieItems"
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
