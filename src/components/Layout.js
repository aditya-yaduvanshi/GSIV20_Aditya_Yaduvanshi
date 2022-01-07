import Nav from "./Nav";
import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";

const Layout = ({children}) => {
  return (
    <Provider store={store}>
      <Router>
        <Nav/>
        {children}
      </Router>
    </Provider>
  )
}

export default Layout;