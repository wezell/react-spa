import alt   from './alt/alt.js';
import dotCMS   from 'dotCMS';
class NavActions {
  constructor() {
    this.dotCMS = new dotCMS();
  }


  updateNavs(path, level) {
    var args = this.dotCMS.baseArgs();

    return fetch(this.dotCMS.baseUrl + this.endPoint + path + "?depth=" + level, args)
      .then(result => result.json())
      .then(function (result) {
        if(result !== undefined && result.children !== undefined){
          return result.children;
        }

      })
      .catch(function (error) {
        console.log('Request failed', error);
      })
  }






}
NavActions.prototype.endPoint = "/api/v1/nav";

export default alt.createActions(NavActions);

