import {MovieDto} from "@/app/types/MovieDto";

export type User = {
    id: string;
    favorites: MovieDto [];
};