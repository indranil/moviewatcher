import {
  WATCH_MOVIE,
  UNWATCH_MOVIE,
  SEARCH_RESULTS,
  CLEAR_SEARCH
} from '../actions/movieActions';

// Initial list of movies
// TODO: Load / save movies to a db, maybe localStorage?
const initialState = {
  movies: [],
  searchResults: [],
  noResults: false
}

const movieReducer = (state = initialState, action) => {
  let movies = Array.from(state.movies);
  
  console.log(action);
  
  switch (action.type) {
    case WATCH_MOVIE:
      // basic check to see if movie exists
      let movieExists = false;
      movies.forEach(movie => {
        if (movie.id === action.movie.id) {
          movieExists = true;
        }
      });
      
      if (!movieExists) {
        return {
          ...state,
          movies: [
            ...movies,
            action.movie
          ]
        };
      }
      return {
        ...state
      };
      
    case UNWATCH_MOVIE:
      let newMovies = movies.filter(movie => {
        return movie.id !== action.movieId
      });
      
      return {
        ...state,
        movies: newMovies,
      };
      
    case SEARCH_RESULTS:
      return {
        ...state,
        noResults: !action.results.length,
        searchResults: action.results
      };
      
    case CLEAR_SEARCH:
      return {
        ...state,
        noResults: false,
        searchResults: []
      };
      
    default:
      return state;
  }
}

export default movieReducer;
