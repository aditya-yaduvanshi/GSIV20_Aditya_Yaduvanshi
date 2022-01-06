import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../contexts/movies";

const useMovies = (page) => {

  const [hasMore, setHasMore] = useState(false);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    let cancel;
    setLoading(true);
    axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {api_key: process.env.REACT_APP_API_KEY, page},
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    }).then((res) => {
      setMovies((prev) => [...new Set([...prev, ...res.data.results])]);
      setHasMore(res.data.results.length > 0);
      setLoading(false);
    }).catch((err) => {
      if(axios.isCancel(err)) 
        return
      setError(true);
    });
    return () => cancel();
  }, [page]);

  return [movies, loading, error, hasMore];
}

export default useMovies;