<template>
  <div class="search">
    <div class="container">
      <input v-model="searchTerm" @keyup.enter="submitSearch" @focus="show_result = true" @blur="show_result = true" class="search-input" type="text" placeholder="Search...">
      <div class="results" v-if="movies.length > 0 && show_result == true">
        <search-result v-on:click.native="resultClick" v-for="movie in movies" :movie="movie" ></search-result>
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
  },
  watch: {
    searchTerm(val) {
      if (val) {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c9552a072186ffa3f695406bd29869b4&query=${val}`)
          .then((response) => {
            this.movies = response.data.results;
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
  .search-input{
    width: 100%;
    border: none;
    border-radius: 0;
    padding: 0 30px;
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
  }

  .results a{
    color: #000;
  }

</style>
