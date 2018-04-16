export default class NavAPI {
  constructor(dotCMSClient) {
    this.dotCMS = dotCMSClient
  }


  getNav(path, level) {
    var args = this.dotCMS.baseArgs();
    var x =this.dotCMS.baseUrl + this.endPoint + path + "?depth=" + level;
    console.log(x);
    return fetch(this.dotCMS.baseUrl + this.endPoint + path + "?depth=" + level, args)
      .then(result => result.json())
      .then(function (result) {
        return result;
      })
      .catch(function (error) {
        console.log('Request failed', error);
      })
  }


}
NavAPI.prototype.endPoint = "/api/v1/nav";



