import { prisma } from "@/prisma/prismaClient";
import {FavoriteEntity} from "@prisma/client";

class FavoriteRepository {

    async addFavorite(userId: string, movieId: string): Promise<FavoriteEntity | null> {
        try {
            const favorite = await prisma.favoriteEntity.create({
                data: {
                    user_id: userId,
                    movie_id: movieId
                }
            });
            return favorite;
        } catch (error) {
            console.error("Error adding favorite:", error);
            throw error;
        }
    }
}

export const favoriteRepository = new FavoriteRepository();