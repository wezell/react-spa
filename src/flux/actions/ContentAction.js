import alt   from './alt/alt.js';
import dotCMS   from 'dotCMS';

class ContentAction {
  constructor() {
    this.dotCMS = new dotCMS();
  }


  pullRaw(json) {

    var args = this.dotCMS.baseArgs();
    args.method = "post";
    args.body = JSON.stringify(json);
    console.log(args.body);

    return fetch(this.dotCMS.baseUrl + this.endPoint, args)
      .then(result => result.json())
      .then(function (result) {
        console.log(result);
        return result.contentlets;
      })
      .catch(function (error) {
        console.log('Request failed', error);
      });

  }

  pullJson(json){
    var q = json.query;
    var limit = (json.limit != null) ? json.limit : 10;
    var orderBy = (json.orderBy != null) ? json.orderBy : "modDate";
    var ascDesc = (json.ascDesc != null) ? json.ascDesc : "asc";
    var page = (json.page != null) ? json.page : 0;
    return this.pullArgs(q, limit, orderBy, ascDesc, page);
  }

  pullArgs(query, limit, orderBy, ascDesc, page) {
    var payload = {
      "_source": ["identifier", "inode"],
      "query": {
        "query_string": {
          "query": query
        }
      },
      "size": limit,
      "from": page * limit,
      "sort": {
        "[orderBy]": ascDesc
      }
    };
    var jsonString = JSON.stringify(payload).replace("[orderBy]", orderBy);
    return this.pull(jsonString);
  }
}
ContentAction.prototype.endPoint = "/api/es/search";
export default alt.createActions(ContentAction);


