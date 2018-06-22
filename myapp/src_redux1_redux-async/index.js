import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'


import App from './containers/app'
import {count} from './redux/reducers'

const store=createStore(
    count,
    composeWithDevTools(applyMiddleware(thunk))
)

    ReactDOM.render((
        <Provider store={store}>
         <App/>
        </Provider>
    ), document.getElementById('root'));


