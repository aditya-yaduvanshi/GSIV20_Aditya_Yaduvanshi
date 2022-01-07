import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import "../styles/components/nav.css";

const Nav = () => {
  const [query, setQuery] = useState("");

  const changeQuery = (event) => {
    setQuery(event.target.value);
  };

  return (
      <nav className="nav">
        <div className="nav_brand">
          <NavLink to="/" className="brand_link">
            Movies Browser
          </NavLink>
        </div>
        <div className="nav_search">
          <form className="nav_search_form" onSubmit={(event) => event.preventDefault()}>
            <input
              className="search_input"
              placeholder="Search movies..."
              type="text"
              name="query"
              value={query}
              onChange={changeQuery}
            />
            <button
              type="reset"
              className={query ? "search_reset" : "search_none"}
              onClick={(event) => {
                event.preventDefault(); 
                setQuery("");
              }}
            >
              &times;
            </button>
          </form>
        </div>
      </nav>
  );
};

export default Nav;
