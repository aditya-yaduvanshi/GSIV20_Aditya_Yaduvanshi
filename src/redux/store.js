import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import movieReducer from "./reducers/moviesList";
import movieDetailsReducer from "./reducers/movieDetails";
import searchMoviesReducer from "./reducers/searchMovies";

const store = createStore(
  combineReducers({
    movies: movieReducer,
    movieDetails: movieDetailsReducer,
    searchMovies: searchMoviesReducer
  }), 
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__(): f => f
  )
);

export default store;