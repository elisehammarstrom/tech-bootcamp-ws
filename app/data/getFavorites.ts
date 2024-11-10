import { Movie } from "../types/Movie";
import { fetchEndpoint } from "./fetchEndpoint";

/* This function calls our BFF, the endpoint that returns the user's favorites.
 * The available endpoins are found in the documentation */
export const getFavorites = async (): Promise<Movie[]> => {
  const url = `/api/users/${process.env.NEXT_PUBLIC_USERNAME}/favorites`;
  const user = await fetchEndpoint<{ favoriteMovies: Movie[] }>(url);
  return user.favoriteMovies;
};
