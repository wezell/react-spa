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
    var cms = new dotCMS("http://localhost:8080", "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJpWEtweXU2QmtzcWI0MHZNa3VSUVF3PT0iLCJpYXQiOjE1MjM0NjI4MDEsInN1YiI6IntcInVzZXJJZFwiOlwiaVhLcHl1NkJrc3FiNDB2TWt1UlFRd1xcdTAwM2RcXHUwMDNkXCIsXCJsYXN0TW9kaWZpZWRcIjoxMjA0ODI0OTYxMDAwLFwiY29tcGFueUlkXCI6XCJkb3RjbXMub3JnXCJ9IiwiaXNzIjoiaVhLcHl1NkJrc3FiNDB2TWt1UlFRdz09IiwiZXhwIjoxNTI2MDU0ODAxfQ.Q0MdoMix4bbic-Ckxa1G33gQrU9GLiJ1Je3cdYo4KcY");

    cms.navClient().getNav("/", 2).then(myData => {
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
