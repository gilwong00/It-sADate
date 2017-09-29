import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//importing Components
import Login from '../containers/login';
import Header from '../containers/header';
import Welcome from './Welcome/Welcome';

const App = () => {
    return(
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route path="/App/:key" component={Login}/>
                
                </Switch>
            </div>
        </BrowserRouter>
    )
};

export default App;
