import React, { Component } from 'react';

class Movie extends Component {
  buttonType = () => {
    if (this.props.type === "add") {
      return this.props.onMovieAdd(this.props.movie);
    } else {
      return this.props.onMovieRemove(this.props.movie.id);
    }
  }
  
  render() {
    const {
      movie,
      type
    } = this.props;

    return (movie.poster_path === null)
    ?
      null
    :
      (
        <li>
          <a href={`https://www.themoviedb.org/movie/${movie.id}`} target="_blank">
            <img src={`http://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
          </a>
          <p>({movie.release_date})</p>
          <button className={type} onClick={this.buttonType}>{type}</button>
        </li>
      );
  }
}

export default Movie;
