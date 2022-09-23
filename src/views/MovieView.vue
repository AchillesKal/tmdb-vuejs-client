<script setup lang="ts">
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';

import { useMovieStore } from "../stores/movies";

const route = useRoute();

const { currentMovie, loading } = storeToRefs(useMovieStore())

const store = useMovieStore();

store.fetchMovie(route.params.movieId as string);
</script>

<template>
    <div class="container mx-auto">
        <h1>Movies {{currentMovie.original_title}}</h1>
    </div>
</template>
