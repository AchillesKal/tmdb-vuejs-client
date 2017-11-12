<template>
  <div class="container">
    <div class="top-rated">
      <h1>Top Rated</h1>
      <div class="top-rated-movies">
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
  name: 'TopRated',
  components: {
    MovieCard,
  },
  data() {
    return {
      movies: [],
    };
  },
  created() {
    this.$store.commit({
      type: 'onLoad',
    });

    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=c9552a072186ffa3f695406bd29869b4&sort_by=vote_average.desc')
      .then((response) => {
        // JSON responses are automatically parsed.
        this.movies = response.data;

        this.$store.commit({
          type: 'unload',
        });
      })
      .catch(() => {
      });
  },
};
</script>

<style scoped>
  .top-rated-movies{
    display: grid;
    grid-template-columns: 50% 50%;
  }
</style>

