import React, {useEffect} from "react";
import "../styles/pages/movieDetails.css";
import MovieHeader from "../components/MovieHeader";
import {getMovieDetails} from "../redux/actions/movieDetails";
import {connect} from "react-redux";
import Loader from "../components/Loader";
import noImage from "../assets/no_image.png";

const MovieDetails = ({
  location: {
    state: {id},
  },
  getMovieDetails,
  movies,
  loading,
  error,
}) => {
  const movie = movies.find((m) => m.id === id);

  useEffect(() => {
    getMovieDetails(id);
    return;
  }, [id, getMovieDetails]);

  console.log(movie);

  return (
    <div className="movie_details">
      {movie && (
        <>
          <MovieHeader
            cover_src={movie.backdrop_path}
            title={movie.title}
            tagline={movie.tagline}
          />
          <div className="movie_details_content movie_row">
            {movie.poster_path && 
              <img
                className="movie_content_img"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt="poster"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = noImage;
                }}
              />
            }
            <div className="movie_content_body">
              {movie.adult && <span className="movie_imp">18+ Only</span>}
              <h2 className="movie_content_title">
                <strong>Original Title: </strong>
                {movie.original_title}
              </h2>
              <div className="movie_content_meta">
                <p className="movie_content_meta_text">
                  <strong>Release: </strong>
                  {movie.release_date}
                </p>
                <p className="movie_content_meta_text">
                  <strong>Average Vote: </strong>
                  {movie.vote_average}
                </p>
                <p className="movie_content_meta_text">
                  <strong>Total Vote: </strong>
                  {movie.vote_count}
                </p>
                <p className="movie_content_meta_text">
                  <strong>Popularity: </strong>
                  {movie.popularity}
                </p>
              </div>
            </div>
          </div>
          <div className="movie_row">
            <p className="movie_content_text">
              <strong>Overview: </strong>
              {movie.overview}
            </p>
            <a
              className="movie_homepage"
              href={movie.homepage}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website &nbsp;
              <i className="material-icons-outlined">link</i>
            </a>
          </div>
        </>
      )}
      {error && (
        <div style={{color: "white", textAlign: "center"}}>
          Error Loading Movie Details
        </div>
      )}
      {loading && <Loader />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movieDetails.movies,
  loading: state.movieDetails.loading,
  error: state.movieDetails.error,
});

export default connect(mapStateToProps, {getMovieDetails})(MovieDetails);
