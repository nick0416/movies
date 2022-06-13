// ACTION TYPES:
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITES = 'ADD_FAVOURITES';

// ACTION CREATORS
export function addMovies(movies) {
    return {
        type: ADD_MOVIES,
        movies
    }
};

export function addFavourite(movie) {
    return {
        type: ADD_FAVOURITES,
        movie
    }
}