import axios from "axios";
import store from "../store";

const types = {
  SET_MOVIES: "SET_MOVIES",
  LOADING_MOVIE: "LOADING_MOVIE",
  ERROR_LOADING_MOVIES: "ERROR_LOADING_MOVIES",
};

const discoverMovies = (page) => async (dispatch) => {
  const cached = store.getState().movies.pages.find(p => p === page);
  if(cached)
    return dispatch({type: "CACHED"});
  
  dispatch({type: types.LOADING_MOVIE});
  let cancel;
  axios({
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie",
    params: {api_key: process.env.REACT_APP_API_KEY, page},
    cancelToken: new axios.CancelToken((c) => (cancel = c)),
  }).then((res) => {
    dispatch({
      type: types.SET_MOVIES,
      payload: {movies: res.data.results, page},
    });
  }).catch((err) => {
    if(axios.isCancel(err)) return;
    dispatch({type: types.ERROR_LOADING_MOVIES})
  });
  return () => cancel();
};

export {discoverMovies, types};
