import React from 'react';
import dotCMS from './api/dotCMS';
import Linkify from 'react-linkify';

export default class PageDetail extends React.Component {
  constructor(props) {
    super(props);
    console.log("PageDetail:" , props )
    var loc = props.location.pathname.replace("/pages","");
    this.state = { page: null, urlMap: loc };
  }


  componentDidMount() {
    console.log("PageDetail:" + this.state.urlMap )

    var cms = new dotCMS();
    cms.pageClient().pageHTML(this.state.urlMap).then(myData => {
      this.setState({ page: myData });

    }).catch(function(rej){
      console.error("PageDetail:"+ rej);
    });
    console.error("componentDidMount done");
  }

  render() {
    var x = this.props.location.pathname;

    if(this.state.page === null){
      return <div></div>;
    }
    return (
      <Linkify>
            <h1>{this.state.page.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: this.state.page.html }} />
            {this.id}
          </Linkify>
    );
  }
}
