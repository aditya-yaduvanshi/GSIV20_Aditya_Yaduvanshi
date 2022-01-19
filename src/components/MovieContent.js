import noImage from "../assets/no-image.png";
import "../styles/components/MovieContent.css";

const MovieContent = ({movie}) => {
  return (
    <>
      <div className="movie_content">
        <div className="content-row">
          {movie.poster_path && (
            <img
              className="content_img content-col"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="poster"
              onError={({currentTarget}) => {
                currentTarget.onerror = null;
                currentTarget.src = noImage;
              }}
            />
          )}
          <div className="content-col">
            {movie.adult && <span className="movie_imp">18+ Only</span>}
            <h2 className="content_title">
              <strong>Original Title: </strong>
              {movie.original_title}
            </h2>
            <div className="content_meta">
              <p className="content_meta_text">
                <strong>Status: </strong>
                {movie.status}
              </p>
              <p className="content_meta_text">
                <strong>Release: </strong>
                {movie.release_date}
              </p>
              <p className="content_meta_text">
                <strong>Average Vote: </strong>
                {movie.vote_average}
              </p>
              <p className="content_meta_text">
                <strong>Total Vote: </strong>
                {movie.vote_count}
              </p>
              <p className="content_meta_text">
                <strong>Popularity: </strong>
                {movie.popularity}
              </p>
              <p className="content_meta_text">
                <strong>Revenue: </strong>
                {movie.revenue}
              </p>
            </div>
          </div>
        </div>
        <div className="content-col">
          <p className="content_text">{movie.overview}</p>
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
      </div>
    </>
  );
};

export default MovieContent;
