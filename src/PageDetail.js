import React from 'react';
import dotCMS from './api/dotCMS';


export default class PageDetail extends React.Component {
  constructor(props) {
    super(props);
    console.log("PageDetail:" , props )
    var loc = props.location.pathname.replace("/pages","");
    this.state = { page: null, urlMap: loc };
  }


  componentDidMount() {
    console.log("PageDetail:componentDidMount"  )

    var cms = new dotCMS("http://localhost:8080","eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJpWEtweXU2QmtzcWI0MHZNa3VSUVF3PT0iLCJpYXQiOjE1MjM0NjI4MDEsInN1YiI6IntcInVzZXJJZFwiOlwiaVhLcHl1NkJrc3FiNDB2TWt1UlFRd1xcdTAwM2RcXHUwMDNkXCIsXCJsYXN0TW9kaWZpZWRcIjoxMjA0ODI0OTYxMDAwLFwiY29tcGFueUlkXCI6XCJkb3RjbXMub3JnXCJ9IiwiaXNzIjoiaVhLcHl1NkJrc3FiNDB2TWt1UlFRdz09IiwiZXhwIjoxNTI2MDU0ODAxfQ.Q0MdoMix4bbic-Ckxa1G33gQrU9GLiJ1Je3cdYo4KcY");
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
          <div>
            <h2>{this.props.location.pathname}</h2>
            <div dangerouslySetInnerHTML={{ __html: this.state.page.html }} />
            {this.id}
          </div>
    );
  }
}
