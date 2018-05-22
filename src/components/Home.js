import React, { Component } from "react";

import Nav from './nav/Nav';

import {

  BrowserRouter
} from "react-router-dom";

class Home extends Component {


  render() {
    return (
      <BrowserRouter basename={'/react'}>
          <Nav/>
          

      </BrowserRouter>
    );
  }
}

export default Home;