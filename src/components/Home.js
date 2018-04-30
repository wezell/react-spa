import React, { Component } from "react";

import Nav from './nav/Nav';
import DotRoute from './DotRoute';
import {
  Route,
  NavLink,
  HashRouter,
  BrowserRouter
} from "react-router-dom";

class Home extends Component {


  render() {
    return (
      <BrowserRouter>
          <Nav/>
          

      </BrowserRouter>
    );
  }
}

export default Home;