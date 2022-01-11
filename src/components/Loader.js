import React from "react";
import "../styles/components/Loader.css";
import loading from "../assets/loading.gif";

const Loader = () => {
  return (
    <div className="loader">
      <img className="loader_img" src={loading} alt="loading..."/>
    </div>
  )
};

export default Loader;