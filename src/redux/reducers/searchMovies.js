import { types } from "../actions/searchMovies";

const initialState = {
  seaching: false,
  error: false,
  results: [],
  pages: [],
};

const searchMoviesReducer = (state = initialState, {type, payload}) => {
  switch(type){
    case types.SEARCHING_MOVIE:
      return {
        ...state,
        searching: true,
      }
    case types.ERROR_SEARCHING_MOVIES:
      return {
        ...state,
        searching: false,
        error: true,
      }
    case types.SET_SEARCH_RESULTS:
      return {
        ...state,
        error: false,
        searching: false,
        results: [...new Set([...state.results, ...payload.results])],
        pages: [...new Set([...state.pages, payload.page])],
      }
    case types.CLEAR_SEARCH_RESULTS:
      return {
        ...state,
        pages: [],
        results: [],
      }
    default:
      return state;
  }
}

export default searchMoviesReducer;