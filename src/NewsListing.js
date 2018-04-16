import React from 'react';
import dotCMS from './api/dotCMS';
import { Link } from 'react-router-dom'



export default class NewsListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { news: [] };
  }

  componentDidMount() {

    var query =
      {
        query: "+contentType:News",
        limit: 10,
        orderBy: "news.sysPublishDate"
      }
      var cms = new dotCMS("http://localhost:8080","eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJpWEtweXU2QmtzcWI0MHZNa3VSUVF3PT0iLCJpYXQiOjE1MjM0NjI4MDEsInN1YiI6IntcInVzZXJJZFwiOlwiaVhLcHl1NkJrc3FiNDB2TWt1UlFRd1xcdTAwM2RcXHUwMDNkXCIsXCJsYXN0TW9kaWZpZWRcIjoxMjA0ODI0OTYxMDAwLFwiY29tcGFueUlkXCI6XCJkb3RjbXMub3JnXCJ9IiwiaXNzIjoiaVhLcHl1NkJrc3FiNDB2TWt1UlFRdz09IiwiZXhwIjoxNTI2MDU0ODAxfQ.Q0MdoMix4bbic-Ckxa1G33gQrU9GLiJ1Je3cdYo4KcY");

      cms.contentClient().pull(query).then(myData => {
      this.setState({ news: myData });
    })
  }

  render() {
    return (
      <ul>
        {this.state.news.map(item => <li key={item.identifier}><Link to={`/news/${item.urlTitle}`}>{item.title}</Link></li>)}

      </ul>
    );
  }
}
