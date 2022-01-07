import React, { useEffect } from "react";
import "../styles/pages/movie_details.css";
import MovieHeader from "../components/MovieHeader";
import { getMovieDetails } from "../redux/actions/movieDetails";
import { connect } from "react-redux";

const MovieDetails = ({location: {state: {id, poster_path}}, getMovieDetails, movies, loading, error}) => {

  const movie = movies.find(m => m.id === id);

  useEffect(() => {
    if(!movie)
      getMovieDetails(id);
  }, [id]);

  return (
    <div className="movie_container">
      { movie && (
        <>
          <MovieHeader 
            cover_src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} 
            poster_src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
        </>
      ) }
      {error && <div>Error Loading Movie Details</div>}
      {loading && <div>Loading</div>}
    </div>
  )
}

const mapStateToProps = (state) => ({
  movies: state.movieDetails.movies,
  loading: state.movieDetails.loading,
  error: state.movieDetails.error
})

export default connect(mapStateToProps, {getMovieDetails})(MovieDetails);