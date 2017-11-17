<template>
  <header class="header">
    <div class="container">
      <div v-bind:class="{ small: scroll }" class="header-inner">
        <div class="menu">
          <router-link to="/"><img class="logo" src="../assets/logo.svg" alt=""></router-link>
          <router-link to="/">Movies</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/top">Top Rated</router-link>
        </div>
      </div>
    </div>
    <search></search>
  </header>
</template>

<script>
import Search from './Search';

export default {
  name: 'TopHeader',
  components: {
    Search,
  },
  data() {
    return {
      scroll: false,
    };
  },
  methods: {
    handleScroll() {
      const scroll = window.scrollY;
      if (scroll > 50) {
        this.scroll = true;
      } else {
        this.scroll = false;
      }
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style scoped>
  .header{
    position: fixed;
    top: 0;
    left: 0;
    background-color: #081c24;
    width: 100%;
    z-index: 999;
  }
  .header-inner{
    height: 121px;
    margin: 0 auto;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    -moz-align-items: center;
    -ms-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    will-change: height;
    transition: height 0.25s ease-in;
  }
  .small{
    height: 60px;
  }
  .header a{
    color: #fff;
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 30px;
    height: 70px;
    line-height: 70px;
  }

  .logo{
    height: 60px;
    padding-top: 5px;
  }

  .menu{
    display: inline-flex;
  }
</style>
