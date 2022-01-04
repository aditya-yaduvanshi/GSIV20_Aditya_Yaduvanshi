import Header from "./Header";
import Footer from "./Footer";
import {BrowserRouter as Router} from "react-router-dom";

const Layout = ({children}) => {
  return (
    <Router>
      <Header/>
      {children}
      <Footer/>
    </Router>
  )
}

export default Layout;