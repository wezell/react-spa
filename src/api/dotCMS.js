import ContentAPI from "./ContentAPI";
import PageAPI from "./PageAPI";
import NavAPI from "./NavAPI";
import EditMode from "./EditMode";

export default class dotCMS {

    constructor() {
        this.baseUrl = "https://estes.dotcms.io";
        this.accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJpWEtweXU2QmtzcWI0MHZNa3VSUVF3PT0iLCJpYXQiOjE1MjY5Mzg0ODMsInN1YiI6IntcInVzZXJJZFwiOlwiaVhLcHl1NkJrc3FiNDB2TWt1UlFRd1xcdTAwM2RcXHUwMDNkXCIsXCJsYXN0TW9kaWZpZWRcIjoxMjA0ODI0OTYxMDAwLFwiY29tcGFueUlkXCI6XCJkb3RjbXMub3JnXCJ9IiwiaXNzIjoiaVhLcHl1NkJrc3FiNDB2TWt1UlFRdz09IiwiZXhwIjoxNTI4MTQ4MDgzfQ.MMXmA9abhhTBRrDg7FDG3SrKUNdd4OYp-zhXbobOOTo"
        }


    getBaseUrl() {
        return this.baseUrl
    }
    pageClient() {
        return new PageAPI(this);
    }

    navClient() {
        return new NavAPI(this);
    }
    
    contentClient() {
        return new ContentAPI(this);
    }

    editMode() {
        return new EditMode(this);
    }

    baseArgs() {
        return {
            method: 'GET',
            headers: {
                'Authorization': "Bearer "+ this.accessToken,
                'Content-Type': 'application/json'
                
            },
            redirect: 'follow',
            cache :'no-cache'
        }
    }

}