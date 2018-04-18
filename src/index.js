import React from "react";
import { render } from 'react-dom';
import Home from './components/Home.js';
import dotCMS from './api/dotCMS';
import PageDetail from './PageDetail';
import News from './News';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

class AppInitializer {
    buildRoutes(data) {
        return data.map((page, i) => {
            this.buildRoute(page);
            if(page.children !== undefined){
                this.buildRoutes(page.children);
            }
        })
    }
    buildRoute(page) {
        return (
            
            <Route
                key={`route{i}`}
                component={PageDetail}
                path={`${page.href}`}
                exact
            />
        )
    }

    run() {
        new dotCMS().navClient().getNav("/", 5).then(nav => {

            render(
                <Router>
                    <div>
                        <Switch>
                        {this.buildRoutes(nav)}
                            <Route path="/" key="home" component={Home} exact />
                            <Route path='/news/:urlMap' key="newz" component={News} />
     

                        

                        </Switch>
                    </div>
                </Router>

                , document.getElementById('app')
            );
        })

    }
}

new AppInitializer().run();