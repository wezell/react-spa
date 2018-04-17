import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import News from "./News";
import PageDetail from "./PageDetail";
import "./index.css";
import ErrorBoundary from './ErrorBoundary';
import nav from './api/NavAPI';
import dotCMS from './api/dotCMS';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { nav: [] };
  }
  componentDidMount() {
    new dotCMS().navClient().getNav("/", 2).then(myData => {
      console.log(myData);
      if(myData != undefined){
        this.setState({ nav: myData.children });
      }
    })
  }

  render() {
    return (
      <BrowserRouter keyLength={5000}>
        <div>
          <h1>dotCMS SPA</h1>
          <ul className="header">
            {this.state.nav.map(item => <li><NavLink to={item.href}>{item.title}</NavLink></li>)}
            <li><NavLink to="/news">News</NavLink></li>
          </ul>
          <div className="content">
              <Route path='/news/:urlMap' component={News} />
              <Route  component={PageDetail} />

          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Main;
