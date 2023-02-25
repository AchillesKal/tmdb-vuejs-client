<script setup lang="ts">
import HomeBanner from "../components/HomeBanner.vue";
import MovieSlider from "../components/MovieSlider.vue";

import usePopularMovieQuery from "../composables/usePopularMovieQuery";
import useTopRatedMovieQuery from "@/composables/useTopRatedMovieQuery";

const {
  isLoading: popularIsLoading,
  isError: popularIsError,
  data: mostPopularMovies,
  error: popularError,
} = usePopularMovieQuery();

const {
  isLoading: topRatedIsLoading,
  isError: topRatedIsError,
  data: topRatedMovies,
  error: topRatedError,
} = useTopRatedMovieQuery();
</script>

<template>
  <main>
    <HomeBanner :movieItems="mostPopularMovies" />
  </main>

  <MovieSlider :movieItems="mostPopularMovies" title="Popular" />

  <MovieSlider :movieItems="topRatedMovies" title="Top Rated" />
</template>
