import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav_brand">
          <NavLink to="/">Findz Movies</NavLink>
        </div>
        <div className="nav_search">
          <input className="search_input" type="text" name="query" />
        </div>
      </nav>
    </header>
  )
}

export default Header;