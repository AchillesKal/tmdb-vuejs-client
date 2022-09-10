<script setup lang="ts">
import HomeBanner from "../components/HomeBanner.vue";
import MostPopular from "../components/MostPopular.vue";

const url = import.meta.env.VITE_APP_BASE_URL;
</script>

<template>
  <main>
    <HomeBanner />
  </main>
  <MostPopular />
</template>
