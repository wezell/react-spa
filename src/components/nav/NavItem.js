import React, { Component } from "react";
import dotCMS from '../api/dotCMS';
import PageDetail from './PageDetail';
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";


class NavItem extends Component {
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
    if (item.children !== undefined && item.children.length > 0) {
      return <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {item.title}
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
      
      
      
        <ul className="nav">{this.buildLinks(item.children)}</ul>
        </div>
      </li>
    } else {
      return (
        <li className="nav-item"><NavLink className="nav-link" to={item.href}>{item.title}</NavLink></li>
      )
    }
  }

  buildRoutes(data) {
    return data.map((page, i) => {
      if (page.children !== undefined && page.children.length > 0) {
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

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">Home</a>


           <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav mr-auto">
            {this.buildLinks(this.state.nav)}
            </ul>
          </div>
          </nav>

        <div className="content-wrap">
          {this.buildRoutes(this.state.nav)}
        </div>
      </div>


    );
  }
}

export default NavItem;