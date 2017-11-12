<template>
  <div v-if="!loading" class="movie" v-bind:style="{ 'background-image': 'url(http://image.tmdb.org/t/p/w1400_and_h450_bestv2/' + movie.backdrop_path + ')' }">
    <div class="container movie-inner">
      <div class="movie-image">
        <img :src="movie.poster_path | poster" >
      </div>
      <div class="movie-info">
        <h1>{{ movie.original_title }} <span class="movie-release">({{ movie.release_date | yearonly }})</span></h1>
        <div>
          <h4 class="movie-overview-label">Overview</h4>
          <p class="movie-overview">
            {{ movie.overview }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Movie',
  data() {
    return {
      movie: {},
      background_color: '',
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.$store.commit({
        type: 'onLoad',
      });
      axios.get(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=c9552a072186ffa3f695406bd29869b4`)
        .then((response) => {
          this.movie = response.data;
          this.$store.commit({
            type: 'unload',
          });
        })
        .catch(() => {
        });
    },
  },
  filters: {
    yearonly: (value) => {
      if (!value) return '';
      value.toString();
      return value.substring(0, 4);
    },
    poster: value => `http://image.tmdb.org/t/p/w300${value}`,
    background: value => `http://image.tmdb.org/t/p/w1400_and_h450_bestv2${value}`,
  },
  watch: {
    $route: 'fetchData',
  },
  computed: {
    loading() {
      return this.$store.state.loading;
    },
  },
};
</script>

<style>
  .movie{
    color: #FFF;
    position: relative;
    padding: 70px 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
  .movie::after{
    background-image: radial-gradient(circle at 20% 50%, rgba(12.16%, 17.65%, 32.94%, 0.94) 0%, rgba(3.53%, 5.49%, 17.25%, 0.94) 100%);
    content: "";
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .movie-inner{
    display: grid;
    grid-template-columns: 30% 70%;
    position: relative;
    z-index: 5;
  }
  .movie-overview-label{
    margin-bottom: 5px;
    font-size: 1.4em;
  }
  .movie-overview{
    font-size: 1em;
    line-height: 1.4em;
    margin: 0;
  }
</style>
