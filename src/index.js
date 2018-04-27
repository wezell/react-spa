import React from "react";
import { render } from 'react-dom';
import Home from './components/Home.js';
import dotCMS from './api/dotCMS';
import PageDetail from './components/PageDetail';
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
            if (page.children !== undefined) {
                return this.buildRoutes(page.children);
            } else {
                return this.buildRoute(page);
            }

        })
    }
    buildRoute(page) {
        return (

            <Route
                key={`route${page.href}`}
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
                            <Route path="/" key="home" component={Home} />
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