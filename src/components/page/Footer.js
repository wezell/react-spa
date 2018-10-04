import React from 'react';

import Container from './Container';
export default class Footer extends React.Component {



  render() {

    if(this.props.showFooter){

      return (
        <footer className="footer bg-light">
          <div className="container">
            <div className="mr-center">This page has a footer!</div>
          </div>
        </footer>

      )
    }
    else{
      return null;

    }
  }
}
