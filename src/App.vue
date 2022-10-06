<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="dark-blue">
    <div class="container mx-auto">
      <nav class="flex items-center justify-between flex-wrap p-4">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <RouterLink to="/">
            <span class="font-semibold text-xl tracking-tight"
              >TMDB VueJS Client</span
            >
          </RouterLink>
        </div>
        <div class="block lg:hidden">
          <button
            class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          class="w-full block lg:flex lg:items-center lg:w-auto font-semibold text-white text-base"
        >
          <RouterLink to="/" class="mr-4">Home</RouterLink>
          <RouterLink to="/about" class="mr-4">Movies</RouterLink>
          <RouterLink to="/about" class="mr-4">TV Shows</RouterLink>
          <RouterLink to="/about" class="mr-4">About</RouterLink>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </a>
        </div>
      </nav>
    </div>
  </header>
  <main class="vh-90">
    <RouterView />
  </main>
  <footer class="text-center lg:text-left bg-gray-100 text-gray-600">
    <div class="text-center p-6 bg-gray-200">
      <span>This Project Uses the </span>
      <a
        class="text-gray-600 font-semibold"
        href="https://www.themoviedb.org/"
        target="_blank"
        >TMDB API</a
      >
    </div>
  </footer>
</template>
