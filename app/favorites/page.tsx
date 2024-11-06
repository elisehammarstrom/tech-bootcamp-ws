/* 
page.tsx in Next.js always corresponds to the url in the folder. 
This is the root folder, meaning that the route will be localhost:3000/ 
*/
"use client"; // Stating that this is a component to be rendered client-side
import { useState } from "react";
import MovieCard from "../components/MovieCard";
import { Movie } from "../types/Movie";

const defaultMovies: Movie[] = [
  {
    title: "Titanic",
    imdbId: "1",
    img: "https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_SX300.jpg",
    isFavorite: true,
  },
  {
    imdbId: "2",
    title: "My Movie",
    img: "https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_SX300.jpg",
    isFavorite: false,
  },
  {
    imdbId: "3",
    title: "My Movie",
    img: "https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_SX300.jpg",
    isFavorite: true,
  },
  {
    title: "Notebook",
    imdbId: "4",
    img: "https://m.media-amazon.com/images/M/MV5BZjE0ZjgzMzYtMTAxYi00NGMzLThmZDktNzFlMzA2MWRmYWQ0XkEyXkFqcGc@._V1_SX300.jpg",
    isFavorite: false,
  },
  {
    title: "Notebook",
    imdbId: "5",
    img: "https://m.media-amazon.com/images/M/MV5BZjE0ZjgzMzYtMTAxYi00NGMzLThmZDktNzFlMzA2MWRmYWQ0XkEyXkFqcGc@._V1_SX300.jpg",
    isFavorite: false,
  },
  {
    title: "Notebook",
    imdbId: "6",
    img: "https://m.media-amazon.com/images/M/MV5BZjE0ZjgzMzYtMTAxYi00NGMzLThmZDktNzFlMzA2MWRmYWQ0XkEyXkFqcGc@._V1_SX300.jpg",
    isFavorite: false,
  },
];

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>(defaultMovies);

  return (
    /* TODO: Refactorera till _app eller liknande så att det inte behöver ligga här */
    <div className="bg-rose-950  items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <h1>My favorites</h1>
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
  );
}
