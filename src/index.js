import React from "react";
import { render } from 'react-dom';
import Home from './components/Home.js';
import dotCMS from './api/dotCMS';


import "./demo.css";

class AppInitializer {


    run() {
        new dotCMS().navClient().getNav("/", 5).then(nav => {

            render(
                <Home/>

                , document.getElementById('app')
            );
        })

    }
}

new AppInitializer().run();