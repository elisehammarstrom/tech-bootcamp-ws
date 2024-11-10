import MovieCard from "../components/MovieCard";
import MovieCardGrid from "../components/MovieCardGrid";
import { getFavorites } from "../data/getFavorites";

export default async function Home() {
  const movies = await getFavorites();
  console.log(movies);

  return (
    /* TODO: Refactorera till _app eller liknande så att det inte behöver ligga här */
    <div className="bg-rose-950 items-center justify-items-center min-h-screen p-8 pb-20 sm:p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center">
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
      </main>
    </div>
  );
}
