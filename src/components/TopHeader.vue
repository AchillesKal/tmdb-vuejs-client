<template>
  <header class="header">
    <div class="container">
      <router-link to="/">Home</router-link>
      <router-link to="/">Movies</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/top">Top Rated</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TopHeader',
};
</script>

<style scoped>
  .header{
    background-color: #333A4D;
    height: 70px;
  }
</style>
