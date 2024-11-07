/* 
page.tsx in Next.js always corresponds to the url in the folder. 
This is the root folder, meaning that the route will be localhost:3000/ 
*/
"use client"; // Stating that this is a component to be rendered client-side
import { useState } from "react";
import MovieCard from "./components/MovieCard";
import { Movie } from "./types/Movie";
import { fetchMovies } from "./utils/fetchMovies";

// TODO: hide these in a "data" file
const defaultMovies: Movie[] = [
  {
    title: "Titanic",
    imdbId: "1",
    img: "https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_SX300.jpg",
    isFavorite: true,
  },
  {
    title: "Notebook",
    imdbId: "2",
    img: "https://m.media-amazon.com/images/M/MV5BZjE0ZjgzMzYtMTAxYi00NGMzLThmZDktNzFlMzA2MWRmYWQ0XkEyXkFqcGc@._V1_SX300.jpg",
    isFavorite: false,
  },
];

export default function Home() {
  const [input, setInput] = useState("");
  const [movies, setMovies] = useState<Movie[]>(defaultMovies);

  const onSearch = async () => {
    const data = await fetchMovies(input);
    setMovies(data);
  };

  return (
    /* TODO: Make this to a background component.  */
    <div className="bg-rose-950  items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search for a movie..."
            className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-700 focus:border-transparent color"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <button
            className="px-4 py-2 text-white bg-pink-700 rounded-lg shadow-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
            onClick={onSearch}
          >
            Search
          </button>
        </div>
        <div className="flex flex-wrap gap-4 max-w-m">
          {movies.map((movie) => (
            <MovieCard
              title={movie.title}
              backgroundImg={movie.img}
              key={movie.imdbId}
              isFavorite={movie.isFavorite}
            />
          ))}
        </div>
      </main>
    </div>
    /* MAIN STARTER PAGE 
      <AppContainer> // Component styling the background and general page 
          <main className="flex flex-col gap-8 items-center">
            {exampleMovies.map((movie) => (
              <MovieCard
                title={movie.title}
                backgroundImg={movie.img}
                key={movie.imdbId} \\ is needed in React when mapping items.
              />
            ))}
        </main>
      </AppContainer> 
    */
  );
}
