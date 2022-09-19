<script setup lang="ts">
  
defineProps(["movieItems", "title"]);
</script>

<template>
  <div class="movie-slider py-6">
    <div class="container mx-auto">
      <div class="title">
        <h2 class="text-2xl font-semibold">What Is {{ title }}</h2>
        <div class="w-full flex gap-10 overflow-x-auto py-6">
          <div
            class="shrink-0 slider-card"
            v-for="(movie, index) in movieItems"
            :key="index"
          >
            <div>
              <img
                class="slider-image rounded-md"
                :src="`https://image.tmdb.org/t/p/w185${movie.poster_path}`"
              />
            </div>
            <div class="font-bold break-words">
              {{ movie.original_title }}
            </div>
            <div class="release-date text-gray-400 text-sm">
              {{ movie.release_date }}
            </div>
          </div>
        </div>
      </div>
      <MovieSearchForm />
    </div>
  </div>
</template>

<style>
.slider-card {
  width: 150px;
  min-width: 150px;
  box-sizing: border-box;
}
.slider-image {
  width: 150px;
  min-width: 150px;
}
</style>
