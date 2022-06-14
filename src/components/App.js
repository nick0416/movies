import React from "react";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { data } from "../data";
import { addMovies, setShowFavourite } from "../actions/index"

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    // sub to state changes
    store.subscribe(() => {
      this.forceUpdate();
    });

    // get data, dispatch action
    store.dispatch(addMovies(data));

    console.log(this.props.store.getState());
  }

  isMovieFavourite = (movie) => {
    const { movies } = this.props.store.getState();
    const { favourites } = movies;
    const index = favourites.indexOf(movie);
    if (index !== -1) {
      return true;
    }
    return false;
  }

  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavourite(val));
  }

  render() {
    console.log(this.props.store.getState());
    const { movies } = this.props.store.getState();
    const { list, favourites, showFavourites } = movies;
    const displayMovies = showFavourites ? favourites : list;
    return (
      <div className="App" >
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites ? '' : 'active-tabs'}`} onClick={() => this.onChangeTab(false)}>
              Movies
            </div>
            <div className={`tab ${showFavourites ? 'active-tabs' : ''}`} onClick={() => this.onChangeTab(true)}>
              Favourites
            </div>
          </div>
          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movies-${index}`}
                dispatch={this.props.store.dispatch}
                isFavourite={this.isMovieFavourite(movie)} />
            ))}
          </div>
          {displayMovies.length === 0 ? <div className="no-movies">No Favourite Movies 😥</div> : null}
        </div>
      </div >
    );
  }
}

export default App;