import { defineStore } from "pinia";

export const useMovieStore = defineStore({
  id: "movies",
  state: () => ({
    movies: [],
  }),
  getters: {
    getMovies: (state) => state.movies,
  },
  actions: {
    async fetchMovies() {
      const apiPath = `https://api.themoviedb.org/3/discover/movie?api_key=${
        import.meta.env.VITE_APP_TMDB_API_KEY
      }&sort_by=popularity.desc`;

      try {
        const data: any = await fetch(apiPath);
        this.movies = data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
