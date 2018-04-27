import React, { Component } from "react";
import dotCMS from '../api/dotCMS';
import PageDetail from './PageDetail';
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";


class Nav extends Component {
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
    if (item.children !== undefined && item.children.length >0) {
      return <li>{item.children[0].title}
        <ul>{this.buildLinks(item.children)}</ul>
        </li>
    } else {
      return (
        <li><NavLink to={item.href}>{item.title}</NavLink></li>
      )
    }
  }

  buildRoutes(data) {
    return data.map((page, i) => {
        if (page.children !== undefined) {
            return this.buildRoutes(page.children);
        } else {
            return this.buildRoute(page);
        }

    })
  }
  buildRoute(page) {
      return (

          <Route
              key={`route${page.href}`}
              component={PageDetail}
              path={`${page.href}`}
              exact
          />
      )
  }
  render() {
    return (
      
      <div>
          {this.buildLinks(this.state.nav)}
      </div>

      
    );
  }
}

export default Nav;