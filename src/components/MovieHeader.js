import "../styles/components/MovieHeader.css";
import React, { useEffect, useState } from "react";
import noImage from "../assets/no_image.png";

const MovieHeader = ({cover_src, title, tagline}) => {
  const [width, setWidth] = useState(() => {
    let w = window.innerWidth;
    if(w >= 360 && w < 640) return "w780";
    else if(w >= 640 && w < 1200) return "w1280";
    else if (w >= 1200) return "original";
    else return "w300";
  })

  useEffect(() => {
    window.onresize = (e) => {
      let w = window.innerWidth;
      if(w >= 360 && w < 640) setWidth("w780");
      else if(w >= 640 && w < 1200) setWidth("w1280");
      else if (w >= 1200) setWidth("original");
      else setWidth("w300");
    };

    return () => {
      window.onresize = undefined;
    };
  }, [width]);

  return (
    <header className="movie_header">
      {cover_src && 
        <img 
          className="header_img" 
          src={`https://image.tmdb.org/t/p/${width}${cover_src}`} 
          alt="cover"
          title={title}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = noImage;
          }}
        />
      }
      <div className="header_content">
        <h1 className="header_title">{title}</h1>
        <p className="header_tagline">{tagline}</p>
      </div>
    </header>
  );
};

export default MovieHeader;