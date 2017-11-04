// Actions - just a few, so go here
export const WATCH_MOVIE = 'MOVIE/WATCHED';
export const UNWATCH_MOVIE = 'MOVIE/UNWATCHED';
export const SEARCH_RESULTS = 'MOVIE/SEARCH_RESULTS';
export const CLEAR_SEARCH = 'MOVIE/CLEAR_SEARCH';

// Watched
export const watchMovie = movie => {
  return {
    type: WATCH_MOVIE,
    movie
  };
};

// Unwatch
export const unwatchMovie = movieId => {
  return {
    type: UNWATCH_MOVIE,
    movieId
  };
};

// Clear Search
export const clearSearch = () => {
  return {
    type: CLEAR_SEARCH
  }
};

// Search results
export const movieSearchResults = query => {
  let api_key = process.env.REACT_APP_TMDB_API_KEY;
  let url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${query}&page=1&include_adult=false`;
  return dispatch => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        dispatch({type: SEARCH_RESULTS, results: res.results});
      });
  }
};
