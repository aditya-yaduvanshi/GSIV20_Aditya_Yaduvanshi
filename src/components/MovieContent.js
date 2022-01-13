import noImage from "../assets/no-image.png";
import "../styles/components/MovieContent.css";

const MovieContent = ({movie}) => {
  return (
    <>
      <div className="movie_content movie_row">
        {movie.poster_path && (
          <img
            className="movie_content_img"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="poster"
            onError={({currentTarget}) => {
              currentTarget.onerror = null;
              currentTarget.src = noImage;
            }}
          />
        )}
        <div className="movie_content_body">
          {movie.adult && <span className="movie_imp">18+ Only</span>}
          <h2 className="movie_content_title">
            <strong>Original Title: </strong>
            {movie.original_title}
          </h2>
          <div className="movie_content_meta">
            <p className="movie_content_meta_text">
              <strong>Release: </strong>
              {movie.release_date}
            </p>
            <p className="movie_content_meta_text">
              <strong>Average Vote: </strong>
              {movie.vote_average}
            </p>
            <p className="movie_content_meta_text">
              <strong>Total Vote: </strong>
              {movie.vote_count}
            </p>
            <p className="movie_content_meta_text">
              <strong>Popularity: </strong>
              {movie.popularity}
            </p>
          </div>
        </div>
      </div>
      <div className="movie_content movie_row">
        <p className="movie_content_text">
        <h3>Overview: </h3>
          {movie.overview}
        </p>
        <a
          className="movie_homepage"
          href={movie.homepage}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Website &nbsp;
          <i className="material-icons-outlined">link</i>
        </a>
      </div>
    </>
  );
};

export default MovieContent;
