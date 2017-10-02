import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//importing Components
import Header from '../containers/header';
import Welcome from '../containers/welcome';

const App = () => {
    return(
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Welcome} />
                </Switch>
            </div>
        </BrowserRouter>
    )
};

export default App;
