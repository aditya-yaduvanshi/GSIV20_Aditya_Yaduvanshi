import { types } from "../actions/movieDetails";

const initialState = {
  movies: [],
  loading: false,
  error: false,
};

const movieDetailsReducer = (state = initialState, {type, payload}) => {
  switch(type){
    case types.SET_MOVIE_DETAIL:
      return {
        ...state,
        movies: [...new Set([...state.movies, payload])],
        loading: false,
        error: false,
      };
    case types.LOADING_MOVIE_DETAIL:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case types.ERROR_LOADING_MOVIE_DETAIL:
      return {
        ...state,
        error: true,
        loading: false,
      }
    default: 
      return state;
  }
}

export default movieDetailsReducer;