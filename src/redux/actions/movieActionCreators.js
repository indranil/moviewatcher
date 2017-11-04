// Actions - just 2, so go here
export const WATCH_MOVIE = 'MOVIE/WATCHED';
export const UNWATCH_MOVIE = 'MOVIE/UNWATCHED';

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
