import {OmdbMovie} from "@/app/types/omdb/OmdbMovie";

export type OmdbSearchResponse = {
    Search: OmdbMovie[];      // Array of movies matching the search
    totalResults: string;     // Total number of results as a string
    Response: string;         // "True" if the request was successful, otherwise "False"
}