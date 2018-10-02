import React from 'react';
import dotCMS from '../../api/dotCMS';
import Linkify from 'react-linkify';
import RawPage from './RawPage';
import LayoutPage from './LayoutPage';
import Loader from 'react-loader-spinner';
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

    if (data === null ) {
      return    <div className="container " style={{marginRight:'auto',marginLeft:'auto',marginTop:100+'px',width:100+'px'}}><Loader 
                  type="Ball-Triangle"
                  color="#eeeeee"
                  height="100"	
                  width="100"
              />   </div> 
    }

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
