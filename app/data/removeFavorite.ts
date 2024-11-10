import { Movie } from "../types/Movie";
import { fetchEndpoint } from "./fetchEndpoint";

/* This function calls our BFF, the endpoint that returns the user's favorites.
 * The available endpoins are found in the documentation */
export const removeFavorite = async (movieId: string): Promise<Movie[]> => {
  const url = `/api/users/${process.env.NEXT_PUBLIC_USERNAME}/favorites/${movieId}`;
  return fetchEndpoint(url, { method: "DELETE" });
};
