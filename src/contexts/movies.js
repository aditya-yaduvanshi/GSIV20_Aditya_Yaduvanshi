import { createContext, useState } from "react";

const MovieContext = createContext();

const Provider = ({children}) => {
  const [movies, setMovies] = useState([]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {children}
    </MovieContext.Provider>
  )
}

export { Provider, MovieContext };
