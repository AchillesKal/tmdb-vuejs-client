<template>
  <div class="search">
    <div class="container">
      <input class="search-input"  type="text" placeholder="Search...">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
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
    font-weight: light;
    font-size: 1.2em;
    color: #acacac;
    box-sizing: border-box;
    text-indent: 0;
  }

</style>
