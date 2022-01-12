import axios from "axios";
import store from "../store";
import types from "../types/searchMovies";

const searchMovies = (query, page) => async (dispatch) => {
  const cached = store.getState().searchMovies.pages.find((p) => p === page);
  if (cached) return dispatch({type: "CACHED"});

  dispatch({type: types.SEARCHING_MOVIE});
  let cancel;
  axios({
    method: "GET",
    url: "https://api.themoviedb.org/3/search/movie",
    params: {api_key: process.env.REACT_APP_API_KEY, query, page},
    cancelToken: new axios.CancelToken((c) => (cancel = c)),
  })
    .then((res) => {
      dispatch({
        type: types.SET_SEARCH_RESULTS,
        payload: {results: res.data.results, page},
      });
    })
    .catch((err) => {
      if (axios.isCancel(err)) return;
      dispatch({type: types.ERROR_SEARCHING_MOVIES});
    });
  return () => cancel();
};

const clearSearchResults = () => async (dispatch) =>
  dispatch({
    type: types.CLEAR_SEARCH_RESULTS,
  });

export {searchMovies, clearSearchResults};
