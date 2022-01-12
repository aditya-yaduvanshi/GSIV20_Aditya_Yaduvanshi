import axios from "axios";
import store from "../store";
import types from "../types/movieDetails";

const getMovieDetails = (id) => async (dispatch) => {
  const cached = store.getState().movieDetails.movies.find(m => m.id === id);
  if(cached) 
    return dispatch({type: "CACHED"});
  
  dispatch({type: types.LOADING_MOVIE_DETAIL});
  let cancel;
  axios({
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${id}`,
    params: {api_key: process.env.REACT_APP_API_KEY},
    cancelToken: new axios.CancelToken((c) => (cancel = c)),
  })
  .then((res) => {
    dispatch({
      type: types.SET_MOVIE_DETAIL,
      payload: res.data,
    });
  })
  .catch((err) => {
    if (axios.isCancel(err)) return;
    dispatch({type: types.ERROR_LOADING_MOVIE_DETAIL});
  });
  return () => cancel();
};

export {getMovieDetails};
