import {useState} from "react";
import {NavLink} from "react-router-dom";
import "../styles/components/header.css";

const Header = () => {
  const [query, setQuery] = useState("");

  const changeQuery = (event) => {
    setQuery(event.target.value);
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav_brand">
          <NavLink to="/" className="brand_link">
            Findz Movies
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
    </header>
  );
};

export default Header;
