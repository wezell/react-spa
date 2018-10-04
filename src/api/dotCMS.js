import ContentAPI from "./ContentAPI";
import PageAPI from "./PageAPI";
import NavAPI from "./NavAPI";
import EditMode from "./EditMode";

export default class dotCMS {

    constructor() {
        this.baseUrl = "http://localhost:8080";
        this.accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIyZTIyMmI5Mi03M2ExLTQwNGYtOTQ1Yy04YjUzNDcxM2JjMjkiLCJpYXQiOjE1Mzg2NjAzMjUsInVwZGF0ZWRfYXQiOjEyMDQ4MjQ5NjEwMDAsInN1YiI6ImRvdGNtcy5vcmcuMSIsImlzcyI6ImI0MzQxZWI5LTA3YzgtNGEyMC05OTFiLTIwOGFjNDA0ZjBmZSIsImV4cCI6MTU0MjIwMjcyNX0.jUBE1oYFiXXME9EtG65CzL_prpRpaRSO-jD9bAN1L84";
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