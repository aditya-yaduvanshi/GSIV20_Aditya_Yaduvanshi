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
  pages,
  clearSearchResults,
  searching,
}) => {
  const [page, setPage] = useState(
    pages.length > 0 ? pages[pages.length - 1] : 1
  );

  const handleClick = (e) => {
    e.preventDefault();
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    if (query) searchMovies(query, page);
    else clearSearchResults();
  }, [page, query, searchMovies, clearSearchResults]);

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
      {results && (
        <button className="search_more" type="button" onClick={handleClick}>
          Load More Results
        </button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  results: state.searchMovies.results,
  searching: state.searchMovies.searching,
  error: state.searchMovies.error,
  pages: state.searchMovies.pages,
});

export default connect(
  mapStateToProps, 
  {searchMovies, clearSearchResults}
)(SearchResults);
