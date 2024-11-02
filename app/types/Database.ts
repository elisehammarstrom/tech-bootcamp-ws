import {Insertable, Selectable, Updateable} from "kysely";

export interface UsersTable {
    id: string
}

export interface MoviesTable {
    id: string;
    title: string;
    img: string;
    imdb_id: string;
}

export interface FavoritesTable {
    id: string;
    user_id: string;
    movie_id: string;
}

// Define your database schema
export interface Database {
    users: UsersTable,
    movies: MoviesTable,
    favorites: FavoritesTable
}

export type User = Selectable<UsersTable>
export type Movie = Selectable<MoviesTable>
export type NewMovie = Insertable<MoviesTable>
export type MovieUpdate = Updateable<MoviesTable>

export type Favorite = Selectable<FavoritesTable>
export type NewFavorite = Insertable<FavoritesTable>
export type FavoriteUpdate = Updateable<FavoritesTable>