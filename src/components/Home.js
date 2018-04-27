import React, { Component } from "react";

import Nav from './Nav';
import DotRoute from './DotRoute';
import {
  Route,
  NavLink,
  HashRouter,
  BrowserRouter
} from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <BrowserRouter>
          <Nav/>
          

      </BrowserRouter>
    );
  }
}

export default Home;