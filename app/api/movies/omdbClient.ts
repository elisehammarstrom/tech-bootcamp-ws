import axios from 'axios';
import {Movie} from "@/app/types/Movie";

class OmdbClient {
    private readonly apiKey: string;
    private readonly baseUrl: string;

    constructor() {
        const apiKey = process.env.OMDB_API_KEY || '';
        const baseUrl = process.env.OMDB_BASE_URL || '';
        if (!apiKey) {
            throw new Error('OMDb API key not provided. Set the OMDB_API_KEY environment variable in .env.');
        } else if (!baseUrl) {
            throw new Error('OMDb API URL not provided. Set the OMDB_API_URL environment variable in .env.');
        }
        this.apiKey = apiKey;
        this.baseUrl = baseUrl;
    }

    async searchByTitle(title: string) {
        try {
            const response = await axios.get(this.baseUrl, {
                params: {
                    s: title,
                    apikey: this.apiKey,
                },
            });
            if (response.data && response.data.Response === 'True') {
                return [response.data];
            } else {
                return [];
            }
        } catch (error) {
            console.error('Error fetching movie by title from OMDb:', error);
            throw new Error('Failed to fetch movie from OMDb');
        }
    }

    /**
     * Example additional method to search by IMDb ID
     * @param imdbID - The IMDb ID of the movie to fetch.
     * @returns The movie data or null if not found.
     */
    /*async searchByImdbID(imdbID: string) {
        try {
            const response = await axios.get(OMDB_API_URL, {
                params: {
                    i: imdbID,
                    apikey: this.apiKey,
                },
            });

            if (response.data && response.data.Response === 'True') {
                return response.data;
            } else {
                return null;
            }
        } catch (error) {
            console.error('Error fetching movie by IMDb ID from OMDb:', error);
            throw new Error('Failed to fetch movie by IMDb ID from OMDb');
        }
    }*/
}

// Instantiate and export an instance of OmdbClient with the API key from environment variables
export const omdbClient = new OmdbClient();