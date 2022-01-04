import {Route, Switch} from "react-router-dom";
import MovieDetails from "./pages/movie_details";
import MovieList from "./pages/movie_list";

const App = () => {
  return (
    <main className="App">
      <Switch>
        <Route path="/" exact component={MovieList} />
        <Route path="/:movieId" component={MovieDetails} />
      </Switch>
    </main>
  );
};

export default App;
