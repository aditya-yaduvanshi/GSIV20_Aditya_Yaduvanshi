import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import "../styles/components/Nav.css";
import SearchResults from "./SearchResults";

const Nav = () => {
  const [query, setQuery] = useState("");

  const changeQuery = (event, setInitial = 0) => {
    setQuery(setInitial ? "" : event.target.value);
  };

  return (
    <nav className="nav">
      <div className="nav_brand">
        <NavLink to="/" className="brand_link">
          <i className="material-icons-outlined">home</i> Movies Browser
        </NavLink>
      </div>
      <div className="nav_search">
        <form
          className="nav_search_form"
          onSubmit={(event) => event.preventDefault()}
        >
          <i className="material-icons-outlined search_icon">search</i>
          <input
            className="search_input"
            placeholder="Search movies..."
            type="text"
            name="query"
            value={query}
            onChange={changeQuery}
            autoComplete="off"
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
        <SearchResults onBlur={() => setQuery("")} query={query} />
      </div>
    </nav>
  );
};

export default Nav;
