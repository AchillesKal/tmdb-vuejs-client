<script setup lang="ts">
import { useRoute } from "vue-router";
import MovieGenres from "../components/MovieGenres.vue";
import {
  getMovieReleaseYearFromString,
  getHoursFromRuntime,
} from "@/services/movie";
import { useQuery } from "@tanstack/vue-query";

const route = useRoute();
const movieId = route.params.movieId;

const { data: currentMovie } = useQuery({
  queryKey: ["movies", movieId],
  queryFn: async () => {
    const apiPath = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${
      import.meta.env.VITE_APP_TMDB_API_KEY
    }&language=en-US`;

    const res = await fetch(apiPath);
    return await res.json();
  },
});
</script>

<template>
  <div class="container mx-auto"></div>
  <div v-if="!loading" class="single-movie-wrapper bg-blue-700">
    <div class="container mx-auto p-8 flex">
      <div class="movie-poster">
        <div class="image_content backdrop">
          <img
            class="poster rounded-md lazyload lazyloaded"
            :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${currentMovie.poster_path}`"
            :data-src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${currentMovie.poster_path}`"
            :data-srcset="`https://image.tmdb.org/t/p/w300_and_h450_bestv2/h32gl4a3QxQWNiNaR4Fc1uvLBkV.jpg 1x, https://image.tmdb.org/t/p/w600_and_h900_bestv2/h32gl4a3QxQWNiNaR4Fc1uvLBkV.jpg 2x`"
            alt="Pinocchio"
            :srcset="`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${currentMovie.poster_path} 1x, https://image.tmdb.org/t/p/w600_and_h900_bestv2/${currentMovie.poster_path} 2x`"
            data-loaded="true"
          />
        </div>
        <img
          :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${currentMovie.poster_path}`"
        />
      </div>
      <div class="pl-10">
        <h1 class="text-3xl font-bold inline">
          {{ currentMovie.original_title }}
        </h1>
        <span
          >({{
            getMovieReleaseYearFromString(currentMovie.release_date)
          }})</span
        >
        <div>
          {{ new Date(currentMovie.release_date).toLocaleDateString("en-US") }}
        </div>
        <MovieGenres :genres="currentMovie.genres" />
        <div>
          {{ getHoursFromRuntime(currentMovie.runtime) }}
        </div>
        <div>
          <h3 class="text-lg">Overfiew</h3>
          {{ currentMovie.overview }}
        </div>
      </div>
    </div>
  </div>
  <div v-if="loading">Loading...</div>
</template>

<style>
.single-movie-wrapper {
  background-color: rgb(2, 105, 143);
  min-height: 570px;
}

.movie-poster {
  border-width: 0px;
  min-width: 300px;
  width: 300px;
  height: 450px;
  overflow: hidden;
}
</style>
