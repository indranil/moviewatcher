import React from 'react';
import Movie from './Movie';

const SearchResults = props => {
  if (props.noResults) {
    return (
      <div className="search-results cf">
        <p>No results found.</p>
        <button onClick={props.clearSearch} className="clear-search">Clear Search</button>
      </div>
    );
  } else {
    if (props.searchResults.length > 0) {
      return (
        <div className="search-results cf">
          <h3>Search Results:</h3>
          <ul className="movies cf">
            {props.searchResults.map(movie => (
              <Movie key={movie.id} movie={movie} type="add" onMovieAdd={props.onMovieAdd} />
            ))}
          </ul>
          <button onClick={props.clearSearch} className="clear-search">Clear Search</button>
        </div>
      );
    }
  }
  return null;
}

export default SearchResults;
