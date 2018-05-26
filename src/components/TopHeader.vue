<template>
  <header class="header">
    <div class="container">
      <div v-bind:class="{ small: scroll }" class="header-inner">
        <div class="header-logo">
          <router-link to="/">
            <div><span class="red">Super</span> <span>Awesome</span></div>
            <div><span>Movie</span> <span class="red">Client</span></div>
          </router-link>
        </div>
        <button id="hamburger" class="hamburger hamburger-cancel">
          <span class="icon"></span>
        </button>
        <div class="header-menu">
          <router-link to="/">Home</router-link>
          <router-link to="/top">Top Rated</router-link>
          <router-link to="/about">About</router-link>
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
    background-color: #24292E;
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
    justify-content: space-between;
  }

  .header-logo{
    font-size: 26px;
    text-align: center;
    transition: all 0.25s;
  }

  .header-menu{
    display: none;
  }

  .small{
    height: 60px;
  }

  .small .header-logo{
    font-size: 20px;
    transition: all 0.25s;
  }
  .header a{
    color: #fff;
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 30px;
    height: 70px;
  }

  .logo{
    height: 60px;
    padding-top: 5px;
  }

  .menu{
    display: inline-flex;
  }

  .red{
    color: #ff6670;
  }

  .hamburger {
    font-size: 35px;
    width: 1em;
    padding: 0;
    cursor: pointer;
    transition: transform .2s ease-in-out;
    border: 0 none;
    background: transparent;
  }

  .hamburger:before, .hamburger:after {
    content: "";
  }

  .hamburger:before, .hamburger .icon, .hamburger:after {
    display: block;
    width: 100%;
    height: .2em;
    margin: 0 0 .2em;
    transition: transform .2s ease-in-out;
    border-radius: .05em;
    background: #FFF;
  }

  @media (min-width: 670px) {
    .header-menu{
      display: block;
    }
  }
</style>
