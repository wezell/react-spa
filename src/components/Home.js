import React, { Component } from "react";
import dotCMS from '../api/dotCMS';
import {
  NavLink
} from "react-router-dom";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { nav: [] };
  }
  componentDidMount() {
    new dotCMS().navClient().getNav("/", 3).then(myData => {
      if (myData !== undefined) {
        this.setState({ nav: myData });
      }
    })
  }

  buildLinks(data) {
    return data.map((page) => {
      return this.buildLink(page);
    })
  }

  buildLink(item) {
    if (item.children !== undefined) {
      return this.buildLinks(item.children);
    } else {
      return (
        <li><NavLink to={item.href}>{item.title}</NavLink></li>
      )
    }
  }

  render() {
    return (
      <div>
        <h1>dotCMS SPA</h1>
        <ul className="header">
          {this.buildLinks(this.state.nav)}
          <li><NavLink to="/news">News</NavLink></li>
        </ul>
      </div>
    );
  }
}

export default Home;