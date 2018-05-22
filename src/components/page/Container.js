import React from 'react';

import Linkify from 'react-linkify';

export default class Container extends React.Component {
  constructor(props) {
    super(props);

  }


  componentDidMount() {

  }

  getContainer(containerInfo){
      //console.log("containerInfo", containerInfo)
      //console.log("this.props.page", this.props.page)
      return this.props.page.containers[containerInfo].rendered;

  }
  render() {
    var containers = this.props.page.containers ;
    var containerInfo = this.props.containerInfo;


    var container = this.getContainer(containerInfo);
    
    return (

        <div className="dotContainer" dangerouslySetInnerHTML={{ __html: container }} />

    );
  }
}
