import "../styles/components/movie_header.css";
import React from "react";

const MovieHeader = ({cover_src, poster_src}) => {
  return (
    <header className="movie_header" style={{backgroundImage: `url(${cover_src})`}}>
      <img className="header_img" src={poster_src} alt="poster"/> 
      <div className="header_body">
        body
      </div>
    </header>
  )
}

export default MovieHeader;