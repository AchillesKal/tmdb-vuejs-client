import type { Genre } from "./Genre";

export interface Movie {
  original_title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  genres: Genre[];
  runtime: number;
}
