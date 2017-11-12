<template>
  <div id="app">
    <top-header></top-header>
    <search></search>
    <router-view/>
    <div class="spinner-wrap">
      <bounce-loader class="spinner" :loading="loading" :color="color" :size="size"></bounce-loader>
    </div>
  </div>
</template>

<script>
import BounceLoader from 'vue-spinner/src/BounceLoader';
import 'normalize.css';
import TopHeader from './components/TopHeader';
import Search from './components/Search';


export default {
  name: 'app',
  components: {
    TopHeader,
    Search,
    BounceLoader,
  },
  data() {
    return {
      color: 'black',
      size: '150px',
    };
  },
  computed: {
    loading() {
      return this.$store.state.loading;
    },
  },
};
</script>

<style lang="scss">
  body{
    background-color: #4E566B;
    margin: 0;
    font-family: 'Source Sans Pro', sans-serif;
  }
  h3{
    margin: 0;
  }
  .container{
    margin: 0 auto;
    width: 80%;
  }
  a{
    color: #FFF;
    text-decoration: none;
  }
  .spinner-wrap{
    text-align: center;
  }
  .spinner{
    display: inline-block;
  }
</style>