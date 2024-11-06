import {prisma} from "@/prisma/prismaClient";
import {FavoriteEntity} from "@prisma/client";

class FavoriteRepository {

    async saveFavorite(userId: string, movieId: string): Promise<FavoriteEntity | null> {
        try {
            return await prisma.favoriteEntity.create({
                data: {
                    user_id: userId,
                    movie_id: movieId
                }
            });
        } catch (error) {
            console.error("Error adding favorite:", error);
            throw error;
        }
    }

    async isFavorite(userId: string, imdbId: string): Promise<boolean> {
        const favorite = await prisma.favoriteEntity.findFirst({
            where: {
                user_id: userId,
                movie: {
                    imdb_id: imdbId
                }
            },
            include: {
                movie: true
            }
        });
        return favorite !== null;
    }
}

export const favoriteRepository = new FavoriteRepository();