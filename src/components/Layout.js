import Nav from "./Nav";
import {BrowserRouter as Router} from "react-router-dom";
import { Provider } from "../contexts/movies";

const Layout = ({children}) => {
  return (
    <Provider>
      <Router>
        <Nav/>
        {children}
      </Router>
    </Provider>
  )
}

export default Layout;