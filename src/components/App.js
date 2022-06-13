import React from "react";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { data } from "../data";
import { addMovies } from "../actions/index"

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

  render() {
    const movies = this.props.store.getState();
    return (
      <div className="App" >
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">
              Movies
            </div>
            <div className="tab">
              Favourites
            </div>
          </div>
          <div className="list">
            {movies.map((movie, index) => (
              <MovieCard movie={movie} key={`movies-${index}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;