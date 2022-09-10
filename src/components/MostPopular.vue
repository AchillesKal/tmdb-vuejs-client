<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Movie {
  original_title: string;
  poster_path: string;
}

const movies = ref<Movie[]>([])

const apiPath = `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_APP_TMDB_API_KEY}&sort_by=popularity.desc`

onMounted(() => {
  fetch(apiPath).then((res) => {
          return res.json();
      }).then((response:any) => {
        console.log(response.results)
        movies.value = response.results;
      }).catch(error => {
          console.log(error)
      }) 
})

</script>

<template>
  <div class="home-banner bg-sky-900">
    <div class="container mx-auto">
      <div class="title">
      <h2>What Is Popular</h2>
      <div>
        <li v-for="(movie, index) in movies" :key="index">
          {{ movie.original_title }}
          <img :src="`https://image.tmdb.org/t/p/w185${movie.poster_path}`" />
        </li>
      </div>
    </div>
    <MovieSearchForm />
    </div>
  </div>
</template>
