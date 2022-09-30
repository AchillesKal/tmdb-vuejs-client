<script setup lang="ts">
import type { Movie } from '@/models/Movie';
import { ref, watchEffect } from 'vue'    
import { useRoute } from 'vue-router';

const route = useRoute();
      
const apiPath = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_APP_TMDB_API_KEY}&language=en-US&query=${route.params.searchTerm}&page=1&include_adult=false`;

const movies = ref<Movie[]>()

watchEffect(async () => {
    
  const response = await fetch(apiPath);
  const responseJson = await response.json();
  movies.value = responseJson['results'] as Movie[];
  //movies.value =
  console.log(responseJson)
})

</script>

<template>
    <div class="container mx-auto p-8">
        <div v-for="movie in movies" class="container mx-auto">
            <div class="flex bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start mb-4" style="cursor: auto;">                
                <div class="relative w-32 h-32 flex-shrink-0">
                    <div class="absolute left-0 top-0 w-full h-full flex">
                        <img loading="lazy" class="poster" :src="`https://image.tmdb.org/t/p/w94_and_h141_bestv2/${movie.poster_path}`" :srcset="`https://image.tmdb.org/t/p/w94_and_h141_bestv2/${movie.poster_path} 1x, https://image.tmdb.org/t/p/w188_and_h282_bestv2//${movie.poster_path} 2x`" alt="Test">
                    </div>                       
                </div>                      
                <div class="p-4">                        
                    <p class="text-sm line-clamp-1">{{ movie.original_title }}</p>             
                    <p class="text-sm text-gray-500 mt-1 line-clamp-2">{{movie.overview}}</p>
                </div>             
            </div>
        </div>
    </div>
</template>

<style></style>