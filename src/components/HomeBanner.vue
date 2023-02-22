<script setup lang="ts">
import { ref, reactive, watch } from "vue";
import MovieSearchForm from "../components/MovieSearchForm.vue";

const props = defineProps({
  movieItems: Array,
});

const backgroundImagePath = ref("123");

const styleObject = reactive({
  backgroundColor: "#02698F",
  fontSize: "13px",
  backgroundImage: "",
});

watch(
  () => props.movieItems,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (movieItems: any) => {
    const rand = Math.round(Math.random() * movieItems.length);

    const randomMovie = movieItems[rand];

    backgroundImagePath.value = `url("https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/${randomMovie.backdrop_path}")`;
    styleObject.backgroundImage = backgroundImagePath.value;
  }
);
</script>

<template>
  <div>
    <div class="container mx-auto">
      <div
        :style="styleObject"
        class="home-banner flex justify-center items-center"
      >
        <div class="home-banner-inner px-12 py-10 w-full">
          <div class="title mb-5">
            <h2 class="text-5xl font-black">Welcome!</h2>
            <h3 class="text-2xl font-extrabold">
              Millions of movies, TV shows and people to discover. Explore now.
            </h3>
          </div>

          <MovieSearchForm />
        </div>
      </div>
    </div>
  </div>
</template>
