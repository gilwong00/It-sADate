import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//importing Components
import Login from '../containers/login';
import Header from '../containers/header';

const App = () => {
    return(
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={Login} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App;
