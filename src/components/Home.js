import React, { Component } from "react";
import dotCMS from '../api/dotCMS';
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { nav: [] };
  }
  componentDidMount() {
    new dotCMS().navClient().getNav("/", 2).then(myData => {

      if(myData != undefined){
        this.setState({ nav: myData });
      }
    })
  }

  render() {

    return (
      <div>

        <div>
          <h1>dotCMS SPA</h1>
          <ul className="header">
            {this.state.nav.map(item => <li><NavLink to={item.href}>{item.title}</NavLink></li>)}
            <li><NavLink to="/news">News</NavLink></li>
          </ul>

        </div>

      </div>
    );
  }
}
 
export default Home;