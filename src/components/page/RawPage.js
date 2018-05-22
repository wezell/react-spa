import React from 'react';

import Linkify from 'react-linkify';

export default class RawPage extends React.Component {



  render() {
    var data = this.props;
    // 4.3
    var str = data.page.page.map.rendered;
    // 5.0
    //var str = data.page.page.rendered;
    var hasContent = (str !== undefined && str !== null);
    if (hasContent) {
      if (str.indexOf("</header>") > -1 && str.indexOf("<!-- Google Analytics") > -1) {
        str = str.substring(str.indexOf("</header>")+9, str.indexOf("<!-- Google Analytics"));
      }
    }
    var hasInvalidReferences=str.indexOf("src=\"/application/themes")>-1;
    while(hasInvalidReferences){
      str = str.replace("src=\"/application/themes", "src=\"https://estes.dotcms.io/application/themes");
      hasInvalidReferences=str.indexOf("src=\"/application/themes")>-1;
    }

    
    var windowLocation=str.indexOf("window.location.href='/services")>-1;
    while(windowLocation){
      str = str.replace("window.location.href='/services", "window.location.href='/react/services");
      windowLocation=str.indexOf("window.location.href='/services")>-1;
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

