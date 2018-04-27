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
      var cms = new dotCMS();
     cms.contentClient().pullJson(query).then(myData => {
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
