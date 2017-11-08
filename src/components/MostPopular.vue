<template>
  <div class="container">
    <div class="most-popular">
      <h1>Most popular</h1>
      <div class="most-popular-movies">
        <div v-for="movie in movies.results">
          <movie-card :movie="movie"></movie-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import MovieCard from './MovieCard';

export default {
  name: 'MostPopular',
  components: {
    MovieCard,
  },
  data() {
    return {
      movies: [],
    };
  },
  created() {
    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=c9552a072186ffa3f695406bd29869b4&sort_by=popularity.desc')
      .then((response) => {
        this.movies = response.data;
      })
      .catch(() => {
      });
  },
};
</script>

<style scoped>
  .most-popular-movies{
    display: grid;
    grid-template-columns: 50% 50%;
  }
</style>