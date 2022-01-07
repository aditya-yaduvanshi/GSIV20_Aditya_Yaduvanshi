import {types} from "../actions/movies";

const initialState = {
  movies: [],
  loading: false,
  hasMore: false,
  error: false,
  pages: [],
};

const movieReducer = (state = initialState, {type, payload}) => {
  switch(type){
    case types.SET_MOVIES:
      return {
        ...state,
        movies: [...new Set([...state.movies, ...payload.movies])],
        hasMore: payload.movies.length > 0,
        loading: false,
        error: false,
        pages: [...new Set([...state.pages, payload.page])]
      };
    case types.LOADING_MOVIE:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case types.ERROR_LOADING_MOVIES:
      return {
        ...state,
        error: true,
        loading: false,
      }
    default:
      return state;
  }
}

export default movieReducer;