import React, {useEffect} from "react";
import "../styles/pages/movieDetails.css";
import MovieHeader from "../components/MovieHeader";
import {getMovieDetails} from "../redux/actions/movieDetails";
import {connect} from "react-redux";
import Loader from "../components/Loader";
import MovieContent from "../components/MovieContent";

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
          <MovieContent movie={movie} />
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
