<template>
  <div class="container">


    <div class="most-popular">
      <h1>Most popular</h1>
      <div class="most-popular-movies">
        <div v-for="movie in movies.results" class="most-popular-movie">
          <div class="most-popular-movie-image">
            <img :src="movie.poster_path | poster" >
          </div>
          <div class="most-popular-movie-info">
            <div class="most-popular-movie-info-top">
              <h3 class="most-popular-movie-info-title"> <router-link :to="{ name: 'Movie', params: { id: movie.id }}">{{ movie.title }}</router-link></h3>
              <div class="most-popular-movie-info-rating">
                <i class="fa fa-star" aria-hidden="true"></i> {{ movie.vote_average }}
              </div>
            </div>
            <div class="most-popular-movie-info-year">
              <i class="fa fa-calendar" aria-hidden="true"></i> {{ movie.release_date | yearonly}}
            </div>
            <div class="most-popular-movie-info-overview">
              {{ movie.overview }}
            </div>
            <div class="most-popular-movie-info-more">
              <router-link :to="{ name: 'Movie', params: { id: movie.id }}">More info</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'MostPopular',
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
  filters: {
    yearonly: (value) => {
      if (!value) return '';
      value.toString();
      return value.substring(0, 4);
    },
    poster: value => `http://image.tmdb.org/t/p/w185${value}`,
  },
};
</script>

<style scoped>
  a{
    color: #000;
  }
  .most-popular{

  }
  .most-popular-movies{
    display: grid;
    grid-template-columns: 50% 50%;
  }
  .most-popular-movie{
    background-color: #FFF;
    margin: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    height: 278px;
    display: flex;
  }
  .most-popular-movie-image{
    width: 185px;
  }
  .most-popular-movie-info{
    width: 335px;
    height: 278px;
    position: relative;
    box-sizing: border-box;
    padding: 10px 16px 16px 16px;
    color: #4d4d4d;
  }
  .most-popular-movie-info-top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0 5px;
  }
  .most-popular-movie-info-overview{
    word-wrap: break-word;
    white-space: normal;
    color: #4d4d4d;
    font-size: 0.9em;
    line-height: 1.2em;
    margin-top: 30px;
  }
  .most-popular-movie-info-more{
    border-top: 1px solid #e3e3e3;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 16px;
    width: 100%;
    box-sizing: border-box;
  }
</style>