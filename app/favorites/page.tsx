import Link from "next/link";
import MovieCard from "../components/MovieCard";
import MovieCardGrid from "../components/MovieCardGrid";
import { getFavorites } from "../data/getFavorites";
import { Movie } from "../types/Movie";

export default async function Home() {
  let movies: Movie[] = [];
  let error = null;

  try {
    movies = await getFavorites();
  } catch (e) {
    error = "Failed to fetch favorites";
  }

  return (
    <>
      <h1>My favorites</h1>
      <Link href={"/"}>Go to start side</Link>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <MovieCardGrid>
          {movies.map((movie) => (
            <MovieCard
              title={movie.title}
              backgroundImg={movie.img}
              key={movie.imdbId}
              imdbId={movie.imdbId}
              isFavorite={movie.isFavorite}
            />
          ))}
        </MovieCardGrid>
      )}
    </>
  );
}
