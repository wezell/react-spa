import React from 'react';

import Linkify from 'react-linkify';

export default class Container extends React.Component {
  constructor(props) {
    super(props);

  }


  componentDidMount() {

  }

  getContainer(containerInfo){
      console.log(containerInfo)
      return this.props.page.containers[containerInfo.identifier].rendered[ containerInfo.uuid];

  }
  render() {
    var containers = this.props.page.containers ;
    var containerInfo = this.props.containerInfo;


    var container = this.getContainer(containerInfo);
    
    return (
      <Linkify>
        <div className="container" dangerouslySetInnerHTML={{ __html: container }} />
      </Linkify>
    );
  }
}
