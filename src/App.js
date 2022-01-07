import React, {Suspense, lazy} from "react";
import {Route, Switch} from "react-router-dom";
import MovieList from "./pages/movie_list";

const MovieDetails = lazy(() =>
  import("./pages/movie_details")
    .then((page) => page)
    .catch((err) => console.log(err))
);

const App = () => {
  return (
    <main className="App">
      <Suspense fallback={"loading..."}>
        <Switch>
          <Route path="/" exact component={MovieList} />
          <Route path="/:movie" component={MovieDetails} />
        </Switch>
      </Suspense>
    </main>
  );
};

export default App;
