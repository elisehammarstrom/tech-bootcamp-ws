import { Movie } from "../types/Movie";

/* This function calls our BFF. The available endpoins are found in the documentation */
export const fetchMovies = async (title: string): Promise<Movie[]> => {
  const userId = "KatarinaB"; // TODO: Fill in your userid. First name + first letter in last name, eg. KatarinaB
  const url = `/api/movies?title=${title}&userId=${userId}`;

  const response = await fetch(url);
  return await response.json();
};

/* TODO: Add example movies to fetch first. */

/* This function calls our BFF. The available endpoins are found in the documentation */
/* export const fetchMovies = async (title: string): Promise<Movie[]> => {
    console.log("You called the fetchMovies function - amazing!")
  }; */
