import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//importing Components
import Header from '../containers/header';
import Welcome from '../containers/welcome';
import HomePage from '../containers/home-page';

const App = () => {
    return(
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route path="/home" component={HomePage} />
                </Switch>
            </div>
        </BrowserRouter>
    )
};

export default App;
