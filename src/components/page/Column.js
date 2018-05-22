import React from 'react';

import Container from './Container';
export default class Column extends React.Component {



  componentDidMount() {

  }

  render() {
    var widthMap={"25":3, "33":4,"50":6,"66":8,"75":9};
    var column =this.props.column;
    //console.log("column", this.props.column)
    var width=widthMap[this.props.width];
    //console.log("width",width)
    var containers=column.containers;

    return (
      <div className={"col-md-" + width + " "}>
        {containers.map(container => <Container page={this.props.page} containerInfo={container}/>)}
        </div>

    );
  }
}
