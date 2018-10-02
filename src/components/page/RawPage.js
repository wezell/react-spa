import React from 'react';
import dotCMS from '../../api/dotCMS';
import Linkify from 'react-linkify';

export default class RawPage extends React.Component {
  constructor(props) {
    super(props);
    //console.log("RawPage:", props)
  }


  render() {
    var data = this.props;

    var str = data.page.entity.page.rendered
    var hasContent = (str !== undefined && str !== null);
    if (hasContent) {
      if (str.indexOf("</header>") > -1 && str.indexOf("</body>") > -1) {
        str = str.substring(str.indexOf("</header>"), str.indexOf("</body>"));
      }
    }
    return (
      <div className="container raw-page">
        <Linkify>
          <div dangerouslySetInnerHTML={{ __html: str }} />
        </Linkify>
      </div>
    )
  }
}

