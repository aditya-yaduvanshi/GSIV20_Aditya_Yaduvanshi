import types from "../types/searchMovies";

const initialState = {
  searching: false,
  error: false,
  results: [],
  query: null
};

const searchMoviesReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case types.SEARCHING_MOVIE:
      return {
        ...state,
        searching: true,
      };
    case types.ERROR_SEARCHING_MOVIES:
      return {
        ...state,
        searching: false,
        error: true,
      };
    case types.SET_SEARCH_RESULTS:
      return {
        ...state,
        error: false,
        searching: false,
        results: [...new Set([...state.results, ...payload.results])],
        query: payload.query
      };
    case types.CLEAR_SEARCH_RESULTS:
      return {
        ...state,
        searching: false,
        error: false,
        results: [],
        query: null
      };
    default:
      return state;
  }
};

export default searchMoviesReducer;
