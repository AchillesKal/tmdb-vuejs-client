<template>
    <div class="single-result">
        <router-link :to="{ name: 'Movie', params: { id: movie.id }}">{{ movie.title }}</router-link>
    </div>
</template>

<script>
  export default {
    name: 'SearchResult',
    props: ['movie'],
  };
</script>

<style scoped>
a{
    color: #000;
}
</style>
