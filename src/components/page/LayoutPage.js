import React from 'react';
import dotCMS from '../../api/dotCMS';
import Linkify from 'react-linkify';
import Row from './Row' 
export default class LayoutPage extends React.Component {
  constructor(props) {
    super(props);
    console.log("LayoutPage:", props)
  }



  render() {
    var data = this.props.page;

    var rows = data.layout.body.rows;
    return (
      <div className="container">


        {rows.map(row => <Row key={row.identifier} page={this.props.page} row={row}/>)}



      </div>

    );
  }
}
