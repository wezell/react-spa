import React, { Component } from "react";
import dotCMS from '../../api/dotCMS';
import PageDetail from '../page/PageDetail';
import {
  Route,
  NavLink,


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
    if (item.children !== undefined && item.children.length > 0) {
      return <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#"  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {item.title}
        </a>
          <ul className="dropdown-menu">{this.buildLinks(item.children)}</ul>
 
      </li>
    } else {
      var i=0;
      return (
        <li className="nav-item"><NavLink key={i++} className="nav-link" to={item.href}>{item.title}</NavLink></li>
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
        <header id="header" class="header-wrap" style={{background:"black"}}>
          <div class="navbar" role="banner">
            <div class="container header-navbar">
              <div class="navbar-header navbar-inverse" style={{background:"black"}}>
                <div class="col-xs-9 col-md-12">
                  <NavLink to="/index"  style={{background:"black"}}><img src="https://estes.dotcms.io/dA/82ad305a-621d/200w/quest-logo.png" alt="Quest | dotCMS Starter Site" /></NavLink>
                </div>
              </div>
              <nav class="navbar-collapse navbar-inverse bs-navbar-collapse collapse" role="navigation" style={{background:"black"}}>
                <ul className="nav navbar-nav navbar-inverse">
                  {this.buildLinks(this.state.nav)}
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className="content-wrap">
          
          {this.buildRoutes(this.state.nav)}
          
          <Route
            key={`route/index`}
            component={PageDetail}
            path={`/index`}
            exact
          />
        </main>
      </div>


    );
  }
}

export default Nav;