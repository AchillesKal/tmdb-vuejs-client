<script setup lang="ts">
import type { Genre } from "../models/Genre";
const props = defineProps({
  genres: Array,
});

console.log(props)
</script>
    
<template>
    <div class="movie-genres flex" v-if="props.genres">
        <div
            v-for="(genre, index) in (props.genres as Genre[])"
            :key="index"
        >
            {{genre.name}}<span v-if="props.genres.length > 0 && props.genres.length - 1 !== index">,&nbsp;</span>
        </div>
    </div>
</template>

<style>
</style>
        