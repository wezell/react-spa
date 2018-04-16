import ContentAPI from "./ContentAPI";
import PageAPI from "./PageAPI";
import NavAPI from "./NavAPI";

export default class dotCMS {

    constructor(baseUrl, accessToken) {
        this.baseUrl = baseUrl;
        this.accessToken = accessToken;
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
            "cache" :'no-cache'
        }
    }

}