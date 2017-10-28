<template>
  <div id="app">
    <top-header></top-header>
    <search></search>
    <router-view/>
  </div>
</template>

<script>
import 'normalize.css';
import TopHeader from './components/TopHeader';
import Search from './components/Search';

export default {
  name: 'app',
  components: {
    TopHeader,
    Search,
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
</style>