export default class PageAPI {
  constructor(dotCMSClient) {
    this.dotCMS = dotCMSClient
  }

  /*
  This will try to return the proper link if the user passes in either a folder or the link results in a redirect
  l
  */
  resolveFolder(testLink) {
    let args = this.dotCMS.baseArgs();
    args.method = "HEAD";

    var testUrl = this.dotCMS.baseUrl + this.endPoint + testLink;
    console.log("testUrl:" + testUrl)
    return fetch(testUrl, args)
      .then(response => {

        if (response.status === 200) {
          return testLink;
        }

        if (response.status === 404 && testLink.endsWith("/")) {
          return this.resolveFolder(testLink + "index");
        }
        if (!testUrl.endsWith("/") && !testUrl.endsWith("/index")) {
          return this.resolveFolder(testLink + "/index");
        }

        return Promise.reject("Invalid link:" + testUrl);
      });
  }

  pageHTML(pageUrlStr) {

    return this.resolveFolder(pageUrlStr).then(link => {
      var purl = this.dotCMS.baseUrl + this.endPoint +"/"+ link + "?mode=live";

      let args = this.dotCMS.baseArgs();
      args.redirect="follow";
      return fetch(purl, args)
        .then(function (result) {

          return result.json();
        })

    }).catch(function (error) {
      console.error("PageAPI Error:" , error);
      return Promise.reject("error:" + error);
    })
  }
}

PageAPI.prototype.endPoint = "/api/v1/page/render";