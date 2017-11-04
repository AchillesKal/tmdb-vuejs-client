<template>
  <header class="header">
    <div class="container">
      <div class="menu">
        <router-link to="/"><img class="logo" src="../assets/logo.svg" alt=""></router-link>
        <router-link to="/">Movies</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/top">Top Rated</router-link>
      </div>
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
