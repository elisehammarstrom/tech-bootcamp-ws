import {prisma} from "@/prisma/prismaClient";
import {FavoriteEntity} from "@prisma/client";

class FavoriteRepository {

    async deleteFavorite(user_id: string, movie_id: string): Promise<void> {
        await prisma.favoriteEntity.deleteMany({
            where: { user_id, movie_id },
        });
    }

    async countFavoritesByMovieId(movie_id: string): Promise<number> {
        return prisma.favoriteEntity.count({
            where: { movie_id },
        });
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

    async findAllFavorites(userId: string): Promise<FavoriteEntity[]> {
        return prisma.favoriteEntity.findMany({
            where: { user_id: userId }
        });
    }
}

export const favoriteRepository = new FavoriteRepository();