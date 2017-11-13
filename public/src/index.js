
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// import 'bootstrap/dist/css/bootstrap.css';
import '../scss/main.scss';

import App from './components/app';
import rootReducer from './reducers/reducers';

const createStoreWithMiddleware = applyMiddleware(thunk,logger)(createStore);

render(
    <Provider store={createStoreWithMiddleware(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
        <App/>
    </Provider>,
    document.getElementById('app')
)
