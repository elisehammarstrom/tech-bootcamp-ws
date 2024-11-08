/* This function calls our BFF. The available endpoins are found in the documentation */
export const addFavoriteMovie = async (movieId: string) => {
  const userId = ""; // TODO: Fill in your userid as firstName.lastName
  const url = `/api/users/${userId}/favorites/${movieId}`;
  const response = await fetch(url, { method: "POST" });
  return await response.json();
};
