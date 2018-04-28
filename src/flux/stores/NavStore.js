
var alt = require('../alt');
var NavActions = require('../actions/NavActions');

class NavStore {
  constructor() {
    this.data = {};

    this.bindListeners({
        handleUpdateNavs: NavActions.UPDATE_NAVS
    });
  }

  handleUpdateNavs(navs) {
    this.data = navs;
  }
}

module.exports = alt.createStore(NavStore, 'NavStore');