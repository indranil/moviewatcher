import React, { Component } from 'react';
import { connect } from 'react-redux';
import { watchMovie, unwatchMovie } from '../redux/actions/movieActionCreators';

import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import Movie from './Movie';

import tmdb from '../images/tmdb.png';

// We export this as well, because we need it for testing
export class App extends Component {
  state = {
    search: "",
    searchResults: [],
    noResults: false,
  };
  
  changeSearch = e => {
    this.setState({
      search: e.target.value
    });
  }
  
  clearSearch = () => {
    this.setState({
      search: "",
      searchResults: [],
      noResults: false,
    })
  }
  
  searchMovies = (e) => {
    e.preventDefault();
    if (this.state.search !== '') {
      let api_key = process.env.REACT_APP_TMDB_API_KEY;
      let url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${this.state.search}&page=1&include_adult=true`;
      
      fetch(url)
        .then(res => res.json())
        .then(res => {
          if (res.results.length > 0) {
            this.setState({
              searchResults: res.results,
              noResults: false,
            });
          } else {
            this.setState({
              searchResults: [],
              noResults: true,
            });
          }
        });
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
          searchResults={this.state.searchResults}
          noResults={this.state.noResults}
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
    movies: state.movieReducer.movies
  }
)
const mapDispatchToProps = dispatch => {
  return {
    onMovieAdd: movieId => {
      dispatch(watchMovie(movieId))
    },
    onMovieRemove: movieId => {
      dispatch(unwatchMovie(movieId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
