import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import movieReducer from "./reducers/movies";
import movieDetailsReducer from "./reducers/movieDetails";

const store = createStore(
  combineReducers({
    movies: movieReducer,
    movieDetails: movieDetailsReducer
  }), 
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__(): f => f
  )
);

export default store;