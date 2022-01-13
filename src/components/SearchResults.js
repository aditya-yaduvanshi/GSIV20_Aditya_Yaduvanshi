import React, {useEffect, useState} from "react";
import MovieSnippet from "./MovieSnippet";
import Loader from "./Loader";
import {clearSearchResults, searchMovies} from "../redux/actions/searchMovies";
import {connect} from "react-redux";

const SearchResults = ({
  query,
  onBlur,
  results,
  searchMovies,
  error,
  clearSearchResults,
  searching,
}) => {
  const [page, setPage] = useState(1);

  const handleClick = (e) => {
    e.preventDefault();
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    const delayDebaunce = setTimeout(() => {
      if (query.trim()) searchMovies(query.trim(), page);
    }, 300);

    return () => {
      if (!query) clearSearchResults();
      return clearInterval(delayDebaunce);
    };
  }, [page, query, searchMovies, clearSearchResults]);

  if (!query.trim()) return null;
  return (
    <div className="search_results">
      {results?.map((res, index) => (
        <MovieSnippet movie={res} key={`${index}-${res.id}`} onBlur={onBlur} />
      ))}
      {error && (
        <div style={{color: "white", textAlign: "center"}}>
          Error Searching Movies
        </div>
      )}
      {searching && <Loader />}
      {results.length ? (
        <button className="search_more" type="button" onClick={handleClick}>
          Load More Results
        </button>
      ) : (
        <div style={{color: "white", textAlign: "center"}}>
          No Search Results Found!
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  results: state.searchMovies.results,
  searching: state.searchMovies.searching,
  error: state.searchMovies.error,
});

export default connect(mapStateToProps, {searchMovies, clearSearchResults})(
  SearchResults
);
