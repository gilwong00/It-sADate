import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//importing Components
import Greeter from './Greeter';

const App = () => {
    return(
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={Greeter}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App;
