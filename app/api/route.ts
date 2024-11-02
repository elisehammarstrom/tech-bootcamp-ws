import { Movie } from "@/app/types/Movie";
import {NextResponse} from "next/server";

export async function GET() {
  const myMovies: Movie[] = [
    {
      title: "Titanic",
      id: 1,
      img: "https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_SX300.jpg",
      isFavorite: true,
    },
  ];
  return NextResponse.json({ data: myMovies });
}
