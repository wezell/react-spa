import React from 'react';

import Container from './Container';
export default class Column extends React.Component {



  componentDidMount() {

  }

  render() {
    var column =this.props.column;
    console.log("column", this.props.column)
    var width=column.width;
    var offset=column.left;
    var containers=column.containers;

    return (
      <div className={"col-" + width + " column"} >
        {containers.map(container => <Container page={this.props.page} containerInfo={container}/>)}


        </div>

    );
  }
}
