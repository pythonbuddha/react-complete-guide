import React from 'react'; //react library
import ReactDOM from 'react-dom'; //react-dom library
import MyApp from "./MyApp"
import './index.scss';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
        <MyApp />
    </BrowserRouter>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();