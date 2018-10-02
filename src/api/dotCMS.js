import ContentAPI from "./ContentAPI";
import PageAPI from "./PageAPI";
import NavAPI from "./NavAPI";
import EditMode from "./EditMode";

export default class dotCMS {

    constructor() {
        this.baseUrl = "http://localhost:8080";
        this.accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJkMmE4OWE4Ni1mNmEyLTRmZmQtOTM5ZS0zNDMxNGE3YjY4NjYiLCJpYXQiOjE1Mzg0OTUzMTcsInVwZGF0ZWRfYXQiOjEyMDQ4MjQ5NjEwMDAsInN1YiI6ImRvdGNtcy5vcmcuMSIsImlzcyI6IjIzYzZkZDJjLTg5M2QtNDFlZi1hNWFhLTMyODU4MDQxY2M3MCIsImV4cCI6MTUzOTM1OTMxN30.70e5EweujpPnIdZJ2G_PCKxrpuzduKkxdxRWJPM1am0";
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