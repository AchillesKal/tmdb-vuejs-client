<template>
  <div id="app">
    <top-header></top-header>
    <main class="main-body">
      <router-view/>
      <div class="spinner-wrap">
        <bounce-loader class="spinner" :loading="loading" :color="color" :size="size"></bounce-loader>
      </div>
    </main>
    <modal v-if="modal" @close="modal = false"></modal>
  </div>
</template>

<script>
import BounceLoader from 'vue-spinner/src/BounceLoader';
import 'normalize.css';
import TopHeader from './components/TopHeader';
import Modal from './components/Modal';

export default {
  name: 'app',
  components: {
    TopHeader,
    BounceLoader,
    Modal,
  },
  data() {
    return {
      color: 'black',
      size: '150px',
      modal: false,
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
    background-color: #F4F4F4;
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
  .main-body{
    padding-top: 167px;
  }
</style>