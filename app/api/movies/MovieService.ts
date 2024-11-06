import {OmdbMovie} from "@/app/types/omdb/OmdbMovie";
import {Movie} from "@/app/api/movies/Movie";
import {omdbClient} from "@/app/api/movies/OmdbClient";
import {MovieDto} from "@/app/types/MovieDto";
import {OmdbSearchResponse} from "@/app/types/omdb/OmdbSearchResponse";
import {movieRepository} from "@/app/api/movies/MovieRepository";
import { MovieEntity } from "@prisma/client";
import {favoriteRepository} from "@/app/api/users/[userId]/favorites/FavoriteRepository";

export class MovieService {

    async searchByTitle(title: string, userId: string): Promise<MovieDto[]> {
        const response: OmdbSearchResponse = await omdbClient.searchByTitle(title);
        const omdbMovies: OmdbMovie[] = response.Search;
        const movieDtos: MovieDto[] = await Promise.all(omdbMovies.map(async (omdbMovie) => {
            const movie: Movie = Movie.fromOmdbMovie(omdbMovie);
            const isFavorite: boolean = await favoriteRepository.isFavorite(userId, movie.imdbId!);
            return movie.toDto(isFavorite);
        }));
        return movieDtos;
    }

    async getOrCreateMovie(imdbId: string): Promise<Movie> {
        const movieEntity: MovieEntity | null = await movieRepository.findMovieByImdbId(imdbId);
        if (movieEntity) {
            return Movie.fromEntity(movieEntity);
        } else {
            const omdbMovie: OmdbMovie = await omdbClient.findByImdbId(imdbId);
            const createdMovieEntity: MovieEntity | null = await movieRepository.createMovie(imdbId, omdbMovie.Title, omdbMovie.Poster);
            if (createdMovieEntity) {
                return Movie.fromEntity(createdMovieEntity);
            } else {
                throw new Error(`Could not create movie with IMDB ID ${imdbId}`);
            }
        }
    }

}

export const movieService: MovieService = new MovieService();
