import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//importing Components
import Login from '../containers/login';

const App = () => {
    return(
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" component={Login} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App;
