<template>
  <div class="container">
    <div class="top-rated">
      <h1>Top Rated</h1>
      <div class="top-rated-movies">
        <div v-for="movie in movies">
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
      bottom: false,
      page: 1,
    };
  },
  methods: {
    bottomVisible() {
      const scrollY = window.scrollY;
      const visible = document.documentElement.clientHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const bottomOfPage = visible + scrollY >= pageHeight;
      return bottomOfPage || pageHeight < visible;
    },
    addMovies(page = 1) {
      axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIE_DB_API_KEY}&sort_by=vote_average.desc&page=${page}`)
        .then((response) => {
          this.movies.push(...response.data.results);

          this.$store.commit({
            type: 'unload',
          });
        })
        .catch(() => {
        });
    },
  },
  created() {
    this.$store.commit({
      type: 'onLoad',
    });

    window.addEventListener('scroll', () => {
      this.bottom = this.bottomVisible();
    });

    this.addMovies(this.page);
  },
  watch: {
    bottom(bottom) {
      if (bottom) {
        this.page = this.page + 1;
        this.addMovies(this.page);
      }
    },
  },
};
</script>

<style scoped>
  .top-rated-movies{
    display: grid;
    grid-template-columns: 50% 50%;
  }
</style>
