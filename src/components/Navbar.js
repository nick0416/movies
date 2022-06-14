import React from "react";
import { StoreContext } from "../index";

import {
    handleMovieSearch,
    handleAddMovieToList
}
    from "../actions/index";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        }
    }

    handleSearch = () => {
        const { searchText } = this.state;
        if (searchText !== "") {
            this.props.dispatch(handleMovieSearch(searchText));
        }
        return;
    }

    handleChange = (event) => {
        this.setState({
            searchText: event.target.value
        });
    }

    handleAddTomovies = (movie) => {
        this.props.dispatch(handleAddMovieToList(movie));
    }

    render() {
        const { result, showSearchResults } = this.props.search;
        return (
            <div className="navbar">
                <div className="search-container">
                    <input onChange={this.handleChange} />
                    <button id="search-btn" onClick={this.handleSearch}>
                        Search
                    </button>
                    {
                        showSearchResults &&
                        <div className="search-results">
                            <div className="search-result">
                                <img src={result.Poster} alt="search-pic" />
                                <div className="movie-info">
                                    <span>{result.Title}</span>
                                    <button onClick={() => this.handleAddTomovies(result)}>
                                        Add to movies
                                    </button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

class NavbarWrapper extends React.Component {
    render() {
        return (
            <StoreContext.Consumer>
                {(store) => <Navbar dispatch={store.dispatch} search={this.props.search} />}
            </StoreContext.Consumer>
        );
    };
}

export default NavbarWrapper;