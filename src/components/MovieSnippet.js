import { Link } from "react-router-dom";
import "../styles/components/Movie.css";
import React from "react";
import noImage from "../assets/no-image.png";

const MovieSnippet = ({movie, onBlur}) => {
  return (
    <Link
      className="movie_snippet"
      to={{ 
        pathname: `/${movie.title
          .trim()
          .split(" ")
          .join("-")
          .replace(":", "")
          .toLowerCase()}-${movie.id}`,
        state: { id: movie.id, poster_path: movie.poster_path }
      }}
      onBlur={onBlur}
    >
      <img
        className="movie_img"
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = noImage;
        }}
        alt={movie.title}
      />
      <div className="movie_body">
        <h4 className="movie_title">{movie.title}</h4>
        <div className="movie_meta">
          <p className="movie_meta_text">Release: <strong>{movie.release_date}</strong></p>
          <p className="movie_meta_text">Average Vote: <strong>{movie.vote_average}</strong></p>
          <p className="movie_meta_text">Total Vote: <strong>{movie.vote_count}</strong></p>
          <p className="movie_meta_text">Popularity: <strong>{movie.popularity}</strong></p>
        </div>
      </div>
      { movie.adult && <span className="movie_imp">18+ Only</span> }
    </Link>
  )
};

export default MovieSnippet;