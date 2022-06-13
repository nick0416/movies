// ACTION TYPES:
export const ADD_MOVIES = 'ADD_MOVIES'

// ACTION CREATORS
export function addMovies(movies) {
    return {
        type: ADD_MOVIES,
        movies
    }
}