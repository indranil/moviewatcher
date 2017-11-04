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
    return (
      <li><a href={`https://www.themoviedb.org/movie/${this.props.movie.id}`} target="_blank">
        <div className="img-container">
          <img src={`http://image.tmdb.org/t/p/w185${this.props.movie.poster_path}`} alt={this.props.movie.title} />
        </div>
        <h3>{this.props.movie.title}</h3></a>
        <p>({this.props.movie.release_date})</p>
        <button className={this.props.type} onClick={this.buttonType}>{this.props.type}</button>
      </li>
    )
  }
}


export default Movie;
