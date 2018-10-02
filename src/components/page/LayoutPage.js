import React from 'react';
import dotCMS from '../../api/dotCMS';
import Linkify from 'react-linkify';
import Row from './Row' 
import Footer from './Footer' 



export default class LayoutPage extends React.Component {
  constructor(props) {
    super(props);

  }



  render() {
    var page = this.props.page;
    console.log("LayoutPage:", page)
    var rows = page.layout.body.rows;
    var i=0;
    return (
      <div>

      <div className="container layout-page">

        {rows.map(row => <Row key={page.layout.title + (i++)} page={page} row={row}/>)}

      </div>
      <Footer showFooter={page.layout.footer} />,
      </div>
    );
  }
}
