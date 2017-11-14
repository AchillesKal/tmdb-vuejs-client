<template>
  <div class="search">
    <div class="container">
      <div class="search-wrap">
        <i class="fa fa-search search-icon" aria-hidden="true"></i>
        <input v-model="searchTerm" @keyup.enter="submitSearch" @keyup="show_result = true" @blur="searchBlur" class="search-input" type="text" placeholder="Search...">
      </div>
      <div class="results" v-if="movies.length > 0 && show_result == true">
        <search-result v-on:click.native="resultClick" v-for="movie in movies" :movie="movie" :key="movie.id"></search-result>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios';
import searchResult from './SearchResult';

export default {
  name: 'Search',
  components: {
    searchResult,
  },
  data() {
    return {
      searchTerm: '',
      movies: [],
      show_result: false,
    };
  },
  methods: {
    resultClick() {
      this.searchTerm = '';
    },
    submitSearch() {
      this.$router.push({ name: 'Movie', params: { id: this.movies[0].id } });
      this.searchTerm = '';
    },
    searchBlur(event) {
      if (event.relatedTarget && event.relatedTarget.className === 'search-result-link') {
        return false;
      }
      this.show_result = false;
      return true;
    },
  },
  watch: {
    searchTerm(val) {
      if (val) {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c9552a072186ffa3f695406bd29869b4&query=${val}`)
          .then((response) => {
            this.movies = response.data.results.slice(0, 10);
          })
          .catch(() => {
          });
      } else {
        this.movies = [];
      }
    },
  },
};
</script>

<style scoped>
  .search{
    width: 100%;
    background-color: #fff;
    height: 46px;
    border-bottom: 1px solid #dedede;
    box-sizing: border-box;
  }
  .search-wrap{
    display: flex;
  }
  .search-icon{
    line-height: 45px;
    color: #BBB;
  }
  .search-wrap:hover .search-icon{
    color: #444;
  }
  .search-input{
    width: 100%;
    border: none;
    border-radius: 0;
    padding: 0 10px;
    height: 45px;
    line-height: 45px;
    outline: none;
    font-family: Arial, sans-serif;
    font-style: italic;
    font-size: 1.2em;
    color: #acacac;
    box-sizing: border-box;
    text-indent: 0;
  }
  .results{
    background-color: #FFF;
    z-index: 999;
    position: relative;
    border: 1px solid #ccc;
    border-color: rgba(0, 0, 0, .15);
    border-radius: 2px;
    box-shadow: 0 4px 6px 2px rgba(0, 0, 0, .10);
  }
  .results a{
    color: #000;
  }

</style>
