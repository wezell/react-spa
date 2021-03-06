import React from 'react';
import dotCMS from '../../api/dotCMS';
import { Link } from 'react-router-dom'



export default class NewsListing extends React.Component {
  constructor(props) {
    super(props);
    console.log("News")
    this.state = { news: [] };
  }

  componentDidMount() {

    var query =
      {
        query: "+contentType:News",
        limit: 10,
        orderBy: "news.sysPublishDate"
      }
      var cms = new dotCMS();
      cms.contentClient().pullJson(query).then(myData => {
      this.setState({ news: myData });
    })
  }

  render() {
    return (
      
      <ul>

        {this.state.news.map(item => <li key={item.identifier}><Link to={`/react/news/${item.urlTitle}`}>{item.title}</Link></li>)}

      </ul>
    );
  }
}
