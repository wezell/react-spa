import React from 'react';
import dotCMS from '../../api/dotCMS';
import Linkify from 'react-linkify';
import RawPage from './RawPage';
import LayoutPage from './LayoutPage';

export default class PageDetail extends React.Component {
  constructor(props) {
    super(props);
    console.log("PageDetail:", props)
    var loc = props.location.pathname.replace("/pages", "");
    this.state = { page: null, urlMap: loc };
  }


  componentDidMount() {
    console.log("PageDetail:" + this.state.urlMap)

    var cms = new dotCMS();
    cms.pageClient().pageHTML(this.state.urlMap).then(myData => {
      this.setState({ page: myData });

    }).catch(function (rej) {
      console.error("PageDetail:" + rej);
    });

  }

  render() {
    var data = this.state.page;

    if (data === null) {
      return <div>No Page Found</div>;
    }
    console.log(data);
    var hasLayout = (data.entity.layout !== undefined && data.entity.layout !==null);

    if (!hasLayout) {
      return (
        <RawPage page={data.entity} />
      );
    } else {
      return (
        <LayoutPage page={data.entity} />
      );

    }

  }
}
