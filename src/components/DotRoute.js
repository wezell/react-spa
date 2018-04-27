import React, { Component } from "react";
import dotCMS from '../api/dotCMS';
import PageDetail from './PageDetail';
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";


class DotRoute extends Component {
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



  buildRoutes(data) {
    return data.map((page, i) => {
      if (page.children !== undefined && page.children.length >0) {
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
          {this.buildRoutes(this.state.nav)}
      </div>

      
    );
  }
}

export default DotRoute;