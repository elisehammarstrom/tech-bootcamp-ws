import { Movie } from "../types/Movie";
import { fetchEndpoint } from "./fetchEndpoint";

/* This function calls our BFF, the endpoint that add a new movie as favorite.
 * The available endpoins are found in the documentation */
export const addFavoriteMovie = async (movieId: string): Promise<Movie[]> => {
  const url = `/api/users/${process.env.NEXT_PUBLIC_USERNAME}/favorites/${movieId}`;
  return fetchEndpoint(url, { method: "POST" });
};
