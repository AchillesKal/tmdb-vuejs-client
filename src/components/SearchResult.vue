<template>
    <div class="single-result">
        <router-link class="search-result-link" :to="{ name: 'Movie', params: { id: movie.id }}">
            <div class="search-result-image">
                <img :src="movie.poster_path | poster" >
            </div>
            <div class="search-result-body">
                {{ movie.title }}
            </div>
        </router-link>
    </div>
</template>

<script>
  export default {
    name: 'SearchResult',
    props: ['movie'],
    filters: {
      poster: value => `http://image.tmdb.org/t/p/w45${value}`,
    },
  };
</script>

<style scoped>
a{
    color: #000;
}
.search-result-link{
    display: flex;
    padding: 5px;
    font-weight: bold;
    line-height: 29px;
    height: 30px;
}
.search-result-link:hover{
    background-color: #ECF0F7;
}
.search-result-image img{
    width: 20px;
    margin-right: 5px;
}
</style>
