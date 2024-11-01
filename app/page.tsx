/* 
page.tsx in Next.js always corresponds to the url in the folder. 
This is the root folder, meaning that the route will be localhost:3000/ 
*/
"use client"; // Stating that this is a component to be rendered client-side
import { useState } from "react";
import MovieCard from "./components/MovieCard";
import { Movie } from "./types/Movie";

const defaultMovies: Movie[] = [
  {
    title: "Titanic",
    id: 1,
    img: "https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_SX300.jpg",
    isFavorite: true,
  },
  {
    id: 2,
    title: "My Movie",
    img: "https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    id: 3,
    title: "My Movie",
    img: "https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_SX300.jpg",
    isFavorite: true,
  },
  {
    id: 4,
    title: "My Movie",
    img: "https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    id: 5,
    title: "My Movie",
    img: "https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_SX300.jpg",
  },
];

const searchMovies = [
  {
    title: "Notebook",
    id: 1,
    img: "https://m.media-amazon.com/images/M/MV5BZjE0ZjgzMzYtMTAxYi00NGMzLThmZDktNzFlMzA2MWRmYWQ0XkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    title: "Notebook",
    id: 2,
    img: "https://m.media-amazon.com/images/M/MV5BZjE0ZjgzMzYtMTAxYi00NGMzLThmZDktNzFlMzA2MWRmYWQ0XkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    title: "Notebook",
    id: 3,
    img: "https://m.media-amazon.com/images/M/MV5BZjE0ZjgzMzYtMTAxYi00NGMzLThmZDktNzFlMzA2MWRmYWQ0XkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    title: "Notebook",
    id: 4,
    img: "https://m.media-amazon.com/images/M/MV5BZjE0ZjgzMzYtMTAxYi00NGMzLThmZDktNzFlMzA2MWRmYWQ0XkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    title: "Notebook",
    id: 5,
    img: "https://m.media-amazon.com/images/M/MV5BZjE0ZjgzMzYtMTAxYi00NGMzLThmZDktNzFlMzA2MWRmYWQ0XkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    title: "Notebook",
    id: 6,
    img: "https://m.media-amazon.com/images/M/MV5BZjE0ZjgzMzYtMTAxYi00NGMzLThmZDktNzFlMzA2MWRmYWQ0XkEyXkFqcGc@._V1_SX300.jpg",
  },
];

export default function Home() {
  const [message, setMessage] = useState<Movie[]>([]);
  const [input, setInput] = useState("");
  const [movies, setMovies] = useState<Movie[]>(defaultMovies);

  const onClick = async () => {
    const response = await fetch("/api");
    const data = await response.json();
    console.log(data);
    setMessage(data.data);
  };
  return (
    <div className="bg-rose-950  items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center sm:items-start">
        {message.map((movie) => (
          <MovieCard
            title={movie.title}
            backgroundImg={movie.img}
            key={movie.id}
            isFavorite={movie.isFavorite}
          />
        ))}
        <button onClick={onClick}>TRY TO CLICK ME</button>
        <div className="flex gap-4">
          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <button onClick={() => setMovies(searchMovies)}> Search </button>
        </div>
        <div className="flex flex-wrap gap-4 max-w-m">
          {movies.map((movie) => (
            <MovieCard
              title={movie.title}
              backgroundImg={movie.img}
              key={movie.id}
              isFavorite={movie.isFavorite}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
