import { Movie } from "../types/Movie";

export async function GET() {
  // TODO Sara: Here is a be endpoint, for example!
  const myMovies: Movie[] = [
    {
      title: "Titanic",
      id: 1,
      img: "https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_SX300.jpg",
      isFavorite: true,
    },
  ];
  return Response.json({ data: myMovies });
}
