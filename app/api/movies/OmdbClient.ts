import axios from 'axios';
import {OmdbSearchResponse} from "@/app/types/omdb/OmdbSearchResponse";
import {OmdbMovie} from "@/app/types/omdb/OmdbMovie";

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

    async searchByTitle(title: string): Promise<OmdbSearchResponse> {
        console.log('Searching for movie by title:', title);
        try {
            const response = await axios.get(this.baseUrl, {
                params: {
                    s: title,
                    apikey: this.apiKey,
                },
            });
            if (response.data && response.data.Response === 'True') {
                return response.data;
            } else {
                return {} as OmdbSearchResponse;
            }
        } catch (error) {
            console.error('Error fetching movie by title from OMDb:', error);
            throw new Error('Failed to fetch movie from OMDb');
        }
    }

    async findByImdbId(imdbId: string): Promise<OmdbMovie> {
        try {
            const response = await axios.get(this.baseUrl, {
                params: {
                    i: imdbId,
                    apikey: this.apiKey,
                },
            });
            if (response.data && response.data.Response === 'True') {
                return response.data;
            } else {
                throw new Error(`Movie with IMDb ID ${imdbId} not found`);
            }
        } catch (error) {
            console.error('Error fetching movie by IMDb ID from OMDb:', error);
            throw new Error('Failed to fetch movie by IMDb ID from OMDb');
        }
    }
}

export const omdbClient = new OmdbClient();