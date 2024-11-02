import axios from 'axios';
import dotenv from 'dotenv';

class OmdbClient {
    private baseUrl: string;
    private apiKey: string;

    constructor() {
        dotenv.config();
        this.baseUrl = process.env.OMDB_BASE_URL as string;
        this.apiKey = process.env.OMDB_API_KEY as string;

        if (!this.baseUrl || !this.apiKey) {
            throw new Error('OMDB_BASE_URL and OMDB_API_KEY need to be defined in environment variables');
        }
    }

    async fetchMovie(title: string) {
        try {
            const response = await axios.get(this.baseUrl, {
                params: {
                    t: title,
                    apikey: this.apiKey,
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching movie data:', error);
            throw error;
        }
    }
}

export default OmdbClient;