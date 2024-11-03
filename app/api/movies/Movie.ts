import {OmdbMovie} from "@/app/types/omdb/OmdbMovie";
import {MovieDto} from "@/app/types/MovieDto";

export class Movie {
    private imdbId: string;
    private title: string;
    private img: string;

    constructor(imdbId: string, title: string, img: string) {
        this.imdbId = imdbId;
        this.title = title;
        this.img = img;
    }

    static from(omdbMovie: OmdbMovie): Movie {
        return new Movie(
            omdbMovie.imdbID,
            omdbMovie.Title,
            omdbMovie.Poster
        );
    }

    public toDto(): MovieDto {
        return {
            imdbId: this.imdbId,
            title: this.title,
            img: this.img,
            isFavorite: false,
            userId: ""
        }
    }
}
