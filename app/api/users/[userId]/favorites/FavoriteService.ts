import {MovieDto} from "@/app/types/MovieDto";
import {userService, UserService} from "@/app/api/users/UserService";
import {movieService, MovieService} from "@/app/api/movies/MovieService";

export class FavoriteService {
    private movieService: MovieService;
    private userService: UserService;

    constructor(movieService: MovieService, userService: UserService) {
        this.movieService = movieService;
        this.userService = userService;
    }

    async addFavorite(title: string, userId: string): Promise<MovieDto[]> {
        return null
    }

}

export const favoriteService: FavoriteService = new FavoriteService(movieService, userService);
