import type { Genre } from "./Genre";

export interface Movie {
  id: number,
  original_title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  genres: Genre[];
  runtime: number;
}
