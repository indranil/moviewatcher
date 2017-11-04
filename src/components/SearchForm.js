import React from 'react';

const SearchForm = props => {
  return (
    <form className="search-movie cf" onSubmit={props.searchMovies}>
      <input type="text" value={props.search} onChange={props.changeSearch} placeholder="Type a movie name to search..." />
      <button type="submit">Search for Movies</button>
    </form>
  );
}

export default SearchForm;
