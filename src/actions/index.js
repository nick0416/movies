// ACTION TYPES:
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';

// ACTION CREATORS
export function addMovies(movies) {
    return {
        type: ADD_MOVIES,
        movies
    }
};

export function addFavourite(movie) {
    return {
        type: ADD_TO_FAVOURITES,
        movie
    }
}

export function removeFromFavourite(movie) {
    return {
        type: REMOVE_FROM_FAVOURITES,
        movie
    }
}

export function setShowFavourite(val) {
    return {
        type: SET_SHOW_FAVOURITES,
        val
    }
}

export function addMovieSearchResult(movie) {
    return {
        type: ADD_SEARCH_RESULT,
        movie
    }
}

export function handleAddMovieToList(movie) {
    return {
        type: ADD_MOVIE_TO_LIST,
        movie
    }
}

// GET DATA FROM API 
export function handleMovieSearch(movie) {
    const url = `https://www.omdbapi.com/?apikey=f89b7921&t=${movie}`

    return function (dispatch) {
        fetch(url)
            .then(res => res.json())
            .then(movie => {
                console.log('Movie: ', movie);
                // ADDING MOVIE TO STORE
                dispatch(addMovieSearchResult(movie));
            });
    }
}