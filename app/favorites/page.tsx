import MovieCard from "../components/MovieCard";
import MovieCardGrid from "../components/MovieCardGrid";
import { getFavorites } from "../data/getFavorites";

export default async function Home() {
  const movies = await getFavorites();

  return (
    <>
      <h1>My favorites</h1>
      <MovieCardGrid>
        <>
          {movies.map((movie) => (
            <MovieCard
              title={movie.title}
              backgroundImg={movie.img}
              key={movie.imdbId}
              imdbId={movie.imdbId}
              isFavorite={movie.isFavorite}
            />
          ))}
        </>
      </MovieCardGrid>
    </>
  );
}
