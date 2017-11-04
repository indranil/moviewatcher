import { WATCH_MOVIE, UNWATCH_MOVIE } from '../actions/movieActionCreators';

// Initial list of movies
// TODO: Load / save movies to a db, maybe localStorage?
const initialState = {
  movies: []
}

const movieReducer = (state = initialState, action) => {
  let movies = Array.from(state.movies);
  
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
          movies: [
            ...movies,
            action.movie
          ]
        };
      }
      return {
        movies
      };
      
    case UNWATCH_MOVIE:
      let newMovies = movies.filter(movie => {
        return movie.id !== action.movieId
      });
      
      return {
        movies: newMovies
      };
      
    default:
      return state;
  }
}

export default movieReducer;
