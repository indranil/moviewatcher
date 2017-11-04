import React, { Component } from 'react';
import { connect } from 'react-redux';
import { watchMovie, unwatchMovie, movieSearchResults, clearSearch } from '../redux/actions/movieActions';

import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import Movie from './Movie';

import tmdb from '../images/tmdb.png';

// We export this as well, because we need it for testing
export class App extends Component {
  state = {
    search: "",
  };
  
  changeSearch = e => {
    this.setState({
      search: e.target.value
    });
  }
  
  clearSearch = () => {
    this.props.onClearSearch();
    this.setState({
      search: ""
    })
  }
  
  searchMovies = (e) => {
    e.preventDefault();
    if (this.state.search !== '') {
      this.props.onMovieSearch(this.state.search);
    } else {
      this.clearSearch();
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="cf">
          <h1>MovieWatcher</h1>
          <p>Add and remove movies from watched list</p>
        </header>
        
        <SearchForm
          searchMovies={this.searchMovies}
          search={this.state.search}
          changeSearch={this.changeSearch} />
        
        <SearchResults
          clearSearch={this.clearSearch}
          searchResults={this.props.searchResults}
          noResults={this.props.noResults}
          onMovieAdd={this.props.onMovieAdd} />
        
        <div className="my-movies">
          <h2>My Movies</h2>
          <ul className="movies cf">
            {this.props.movies.length ? this.props.movies.map(movie => (
              <Movie key={movie.id} movie={movie} type="remove" onMovieRemove={this.props.onMovieRemove} />
            )) : <p>No Movies added yet</p>}
          </ul>
        </div>
        
        <footer className="cf">
          <em className="by">Made by Indranil Dasgupta</em>
          <em className="attr"><a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer"><img src={tmdb} alt="Powered by TMDB" /></a></em>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    movies: state.movieReducer.movies,
    searchResults: state.movieReducer.searchResults,
    noResults: state.movieReducer.noResults
  }
)
const mapDispatchToProps = dispatch => {
  return {
    onMovieAdd: movie => {
      dispatch(watchMovie(movie))
    },
    onMovieRemove: movieId => {
      dispatch(unwatchMovie(movieId))
    },
    onMovieSearch: query => {
      dispatch(movieSearchResults(query))
    },
    onClearSearch: () => {
      dispatch(clearSearch())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
