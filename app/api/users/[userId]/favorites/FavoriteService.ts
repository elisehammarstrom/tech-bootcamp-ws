import {Movie} from "@/app/types/Movie";
import {userService, UserService} from "@/app/api/users/UserService";
import {movieService, MovieService} from "@/app/api/movies/MovieService";
import {InternalMovie} from "@/app/api/movies/InternalMovie";
import {favoriteRepository} from "@/app/api/users/[userId]/favorites/FavoriteRepository";
import {FavoriteEntity} from "@prisma/client";

export class FavoriteService {
    private movieService: MovieService;
    private userService: UserService;

    constructor(movieService: MovieService, userService: UserService) {
        this.movieService = movieService;
        this.userService = userService;
    }

    async addFavorite(userId: string, imdbId: string, ): Promise<Movie> {
        const favoriteMovie: InternalMovie = await movieService.getOrCreateMovie(imdbId);
        const favoriteEntity: FavoriteEntity | null = await favoriteRepository.saveFavorite(userId, favoriteMovie.id!);
        if (!favoriteEntity) {
            throw new Error(`Could not add favorite movie with IMDB ID ${imdbId} for user ${userId}`);
        }
        return favoriteMovie.toDto(true);
    }

}

export const favoriteService: FavoriteService = new FavoriteService(movieService, userService);
