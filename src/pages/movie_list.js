import "../styles/pages/movie_list.css";
import Movie, {FetchMovie} from "../components/Movie";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { discoverMovies } from "../redux/actions/movies";

const MovieList = ({movies, loading, error, hasMore, discoverMovies, pages}) => { 

  const [page, setPage] = useState(pages.length > 0 ? pages[pages.length - 1] : 1);
  const observer = useRef();

  useEffect(() => {
    console.log("called")
    if(!pages.find(p => p === page))
      discoverMovies(page);
  }, [page]);

  const lastMovieElementRef = useCallback(node => {
    if(loading) return
    if(observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if(entries[0].isIntersecting && hasMore) {
        setPage(prev => prev + 1);
      }
    }, {
      threshold: 1,
    });
    if(node) observer.current.observe(node);
  }, [loading, hasMore]);


  return (
    <div className="movie_list">
      {movies.map((movie, index) => {
        if(movies.length === index + 1)
          return (
            <Movie 
              movie={movie} 
              key={`${index}-${movie.id}`} 
              ref={lastMovieElementRef}
            />
          );
        else 
          return (
            <Movie 
              movie={movie} 
              key={`${index}-${movie.id}`} 
            />
          );
      })}
      {error && <div>Error loading movies</div>}
      {loading && (
        <>
          <FetchMovie/>
          <FetchMovie/>
          <FetchMovie/>
          <FetchMovie/>
          <FetchMovie/>
          <FetchMovie/>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  hasMore: state.movies.hasMore,
  loading: state.movies.loading,
  error: state.movies.error,
  pages: state.movies.pages
})

export default connect(mapStateToProps, {discoverMovies})(MovieList);
