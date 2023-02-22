import { defineStore } from "pinia";

import type { Movie } from "@/models/Movie";

export const useMovieStore = defineStore({
  id: "movies",
  state: () => ({
    mostPopularMovies: [] as Movie[],
    topRatedMovies: [] as Movie[],
    currentMovie: {} as Movie,
    loading: false,
  }),
  getters: {
    getMostPopularMovies: (state) => state.mostPopularMovies,
    getTopRatedMovies: (state) => state.topRatedMovies,
    getCurrentMovie: (state) => state.currentMovie
  },
  actions: {
    async fetchMostPopularMovies() {
      const apiPath = `https://api.themoviedb.org/3/movie/popular?api_key=${
        import.meta.env.VITE_APP_TMDB_API_KEY
      }&sort_by=popularity.desc`;

      try {
        const response: Response = await fetch(apiPath);
        const data = await response.json();

        this.mostPopularMovies = data.results;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async fetchTopRatedMovies() {
      const apiPath = `https://api.themoviedb.org/3/movie/top_rated?api_key=${
        import.meta.env.VITE_APP_TMDB_API_KEY
      }&sort_by=popularity.desc`;

      try {
        const response: Response = await fetch(apiPath);
        const data = await response.json();

        this.topRatedMovies = data.results;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async fetchMovie(movieId: string) {
      const apiPath = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${
        import.meta.env.VITE_APP_TMDB_API_KEY
      }&language=en-US`;

      this.loading = true

      try {
        const response: Response = await fetch(apiPath);
        const data = await response.json();

        this.currentMovie = data;
        this.loading = false;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
