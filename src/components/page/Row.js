import React from 'react';
import Column from './Column'
import Linkify from 'react-linkify';

export default class Row extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    var row = this.props.row;
    console.log("row:", row)
    var cols = row.columns;
    console.log("cols:", cols)
    var widths = this.props
    var left =0;
    var i=0;
    return (
      <div className="row">
        {cols.map(col => 
        
        <Column key={i} page={this.props.page} column={col} width={row.gridWidths[i++]}/>
        
        )}
        </div>

    );
  }
}
