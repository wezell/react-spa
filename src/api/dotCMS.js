import ContentAPI from "./ContentAPI";
import PageAPI from "./PageAPI";
import NavAPI from "./NavAPI";

export default class dotCMS {

    constructor() {
        this.baseUrl = "http://localhost:8080";
        this.accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJpWEtweXU2QmtzcWI0MHZNa3VSUVF3PT0iLCJpYXQiOjE1MjM0NjI4MDEsInN1YiI6IntcInVzZXJJZFwiOlwiaVhLcHl1NkJrc3FiNDB2TWt1UlFRd1xcdTAwM2RcXHUwMDNkXCIsXCJsYXN0TW9kaWZpZWRcIjoxMjA0ODI0OTYxMDAwLFwiY29tcGFueUlkXCI6XCJkb3RjbXMub3JnXCJ9IiwiaXNzIjoiaVhLcHl1NkJrc3FiNDB2TWt1UlFRdz09IiwiZXhwIjoxNTI2MDU0ODAxfQ.Q0MdoMix4bbic-Ckxa1G33gQrU9GLiJ1Je3cdYo4KcY";
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