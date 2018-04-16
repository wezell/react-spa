import React from 'react';
import dotCMS from './api/dotCMS';

export default class NewsDetail extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.match.params.urlMap);
    this.state = { news: {}, urlMap: props.match.params.urlMap };
  }

  componentDidMount() {

    var query =
      {
        query: "+contentType:News +news.urlTitle:" + this.state.urlMap
      }
      var cms = new dotCMS("http://localhost:8080","eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJpWEtweXU2QmtzcWI0MHZNa3VSUVF3PT0iLCJpYXQiOjE1MjM0NjI4MDEsInN1YiI6IntcInVzZXJJZFwiOlwiaVhLcHl1NkJrc3FiNDB2TWt1UlFRd1xcdTAwM2RcXHUwMDNkXCIsXCJsYXN0TW9kaWZpZWRcIjoxMjA0ODI0OTYxMDAwLFwiY29tcGFueUlkXCI6XCJkb3RjbXMub3JnXCJ9IiwiaXNzIjoiaVhLcHl1NkJrc3FiNDB2TWt1UlFRdz09IiwiZXhwIjoxNTI2MDU0ODAxfQ.Q0MdoMix4bbic-Ckxa1G33gQrU9GLiJ1Je3cdYo4KcY");
    
     cms.contentClient().pull(query).then(myData => {
      this.setState({ news: myData[0] });
    })


  }

  render() {
    console.log()
    return (
      <div>
        <h2>{this.state.news.title} </h2>
        <img src={"https://demo.dotcms.com/dA/" + this.state.news.identifier +"/200w"} alt={this.state.news.title} />
        <div dangerouslySetInnerHTML={{ __html: this.state.news.story }} />
      </div>
    );
  }
}
