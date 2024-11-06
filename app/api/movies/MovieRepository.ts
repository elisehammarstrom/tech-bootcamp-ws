import {prisma} from "@/prisma/prismaClient";
import {MovieEntity} from "@prisma/client";

class MovieRepository {

    async createMovie(imdbId: string, title: string, img: string): Promise<MovieEntity | null> {
        try {
            return await prisma.movieEntity.create({
                data: {
                    imdb_id: imdbId,
                    title: title,
                    img: img
                }
            });
        } catch (error) {
            console.error("Could not create Movie:", error);
            throw error;
        }
    }

    async findMovieByImdbId(imdbId: string): Promise<MovieEntity | null> {
        try {
            return await prisma.movieEntity.findUnique({
                where: {
                    imdb_id: imdbId
                }
            });
        } catch (error) {
            console.error("Movie not found:", error);
            throw error;
        }
    }
}

export const movieRepository = new MovieRepository();