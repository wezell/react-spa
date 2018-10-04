import React from 'react';

import Linkify from 'react-linkify';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);

  }


  componentDidMount() {

  }

  getContainer(containerInfo){
      //console.log("containerInfo", containerInfo)
      //console.log(this.props.page.containers[containerInfo.identifier])

      return this.props.page.containers[containerInfo.identifier].rendered['uuid-' + containerInfo.uuid];
  }
  render() {
    var containers = this.props.page.containers ;
    var containerInfo = this.props.containerInfo;


    var containerRendered = this.getContainer(containerInfo);
    
    return (
      <Linkify>
        <div className="container" key={containerInfo.identifier + containerInfo.uuid} dangerouslySetInnerHTML={{ __html: containerRendered }} />
      </Linkify>
    );
  }
}
