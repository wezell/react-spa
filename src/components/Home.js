import React, { Component } from "react";

import Nav from './Nav';
import {
  NavLink
} from "react-router-dom";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { nav: [] };
  }


  render() {
    return (
      <div>
         <Nav/>
      </div>
    );
  }
}

export default Home;