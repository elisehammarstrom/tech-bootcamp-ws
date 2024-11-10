import { Movie } from "../types/Movie";

/* This function calls our BFF. The available endpoins are found in the documentation */
export const addFavoriteMovie = async (movieId: string): Promise<Movie[]> => {
  const url = `/api/users/${process.env.NEXT_PUBLIC_USERNAME}/favorites/${movieId}`;
  const response = await fetch(url, { method: "POST" });
  return await response.json();
  // TOOD: denna returnerar nog inte.
};

/* This function calls our BFF. The available endpoins are found in the documentation */
export const getFavorites = async (): Promise<Movie[]> => {
  const url = `/api/users/${process.env.NEXT_PUBLIC_USERNAME}/favorites`;
  const response = await fetch(url);
  return await response.json();
};
