import { useQuery } from "@tanstack/vue-query";

export default () => {
    return useQuery({
        queryKey: ["popularMovies"],
        queryFn: async () => {
            const apiPath = `https://api.themoviedb.org/3/movie/popular?api_key=${
                import.meta.env.VITE_APP_TMDB_API_KEY
            }&sort_by=popularity.desc`;

            try {
                const response: Response = await fetch(apiPath);
                return await response.json();
            } catch (error) {
                console.log(error);
            }
        },
        select: (response) => response.results
    });
};
