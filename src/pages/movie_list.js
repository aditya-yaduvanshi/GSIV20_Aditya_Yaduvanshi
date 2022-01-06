import "../styles/pages/movie_list.css";
import Movie, {FetchMovie} from "../components/Movie";
import useMovies from "../hooks/useMovies";
import { useCallback, useRef, useState } from "react";

const MovieList = () => { 

  const [page, setPage] = useState(1);
  const observer = useRef();
  const [movies, loading, error, hasMore] = useMovies(page);

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

export default MovieList;
