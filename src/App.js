import React, {Suspense, lazy} from "react";
import {Route, Switch} from "react-router-dom";
import Loader from "./components/Loader";

const MovieDetails = lazy(() =>
  import("./pages/movieDetails")
    .then((page) => page)
    .catch((err) => console.log(err))
);

const MovieList = lazy(() =>
  import("./pages/movieList")
    .then((page) => page)
    .catch((err) => console.log(err))
);

const App = () => {
  return (
    <main className="App">
      <Suspense fallback={<Loader/>}>
        <Switch>
          <Route path="/" exact component={MovieList} />
          <Route path="/:movie" component={MovieDetails} />
        </Switch>
      </Suspense>
    </main>
  );
};

export default App;
