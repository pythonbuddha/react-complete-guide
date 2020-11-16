import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Startseite from './components/home';
import Produkte from './components/products';
import Error from './components/error';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function MyApp(){
    return(
        <main>
            <Header/>
                <Switch>
                    <Route path="/" component={Startseite} exact/>
                    <Route path="/products" component={Produkte}/>
                    <Route component={Error}/>             
                </Switch>
            <Footer/>
        </main>   
    );
}

export default MyApp;