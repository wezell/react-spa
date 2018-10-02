import React from 'react';
import Column from './Column'
import Linkify from 'react-linkify';

export default class Row extends React.Component {
  constructor(props) {
    super(props);
    console.log("Row:", props.row)
  }


  render() {
    var row = this.props.row;
    var cols = row.columns;
    var left =0;

    return (
      <div className="row">
        {cols.map(col => 
        
        <Column key={this.props.page.entity} page={this.props.page} column={col} row={this.props.row}/>
        
        )}
        </div>

    );
  }
}
