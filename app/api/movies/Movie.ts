import {OmdbMovie} from "@/app/types/omdb/OmdbMovie";
import {MovieDto} from "@/app/types/MovieDto";
import {MovieEntity} from "@prisma/client";

export class Movie {
    private _id: string;
    private _imdbId: string;
    private title: string;
    private img: string;

    constructor(id: string, imdbId: string, title: string, img: string) {
        this._id = id;
        this._imdbId = imdbId;
        this.title = title;
        this.img = img;
    }

    get id(): string | null {
        return this._id;
    }

    get imdbId(): string | null {
        return this._imdbId;
    }

    static fromOmdbMovie(omdbMovie: OmdbMovie): Movie {
        return new Movie(
            "",
            omdbMovie.imdbID,
            omdbMovie.Title,
            omdbMovie.Poster
        );
    }

    static fromEntity(movieEntity: MovieEntity): Movie {
        return new Movie(
            movieEntity.id,
            movieEntity.imdb_id,
            movieEntity.title,
            movieEntity.img
        );
    }


    public toDto(isFavorite: boolean): MovieDto {
        return {
            imdbId: this._imdbId,
            title: this.title,
            img: this.img,
            isFavorite: isFavorite
        }
    }
}
