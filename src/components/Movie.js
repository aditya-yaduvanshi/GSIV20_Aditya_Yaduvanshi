import "../styles/components/movie.css";
import {Link} from "react-router-dom";
import { forwardRef } from "react";

const Movie = forwardRef(({movie}, ref) => {
  return (
    <Link
      className="movie"
      to={`/${movie.title
        .trim()
        .split(" ")
        .join("-")
        .replace(":", "")
        .toLowerCase()}/${movie.id}`}
      ref={ref}
    >
      <img
        className="movie_img"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="movie_body">
        <h2 className="movie_title">{movie.title}</h2>
        <div className="movie_meta">
          <p className="movie_meta_text">Release: <strong>{movie.release_date}</strong></p>
          <p className="movie_meta_text">Average Vote: <strong>{movie.vote_average}</strong></p>
          <p className="movie_meta_text">Total Vote: <strong>{movie.vote_count}</strong></p>
          <p className="movie_meta_text">Popularity: <strong>{movie.popularity}</strong></p>
        </div>
        <p className="movie_text">{movie.overview}</p>
      </div>
      { movie.adult && <span className="movie_imp">18+ Only</span> }
    </Link>
  );
});

const FetchMovie = () => {
  return (
    <div className="fetch_movie">
    </div>
  )
}

export default Movie;
export {FetchMovie};