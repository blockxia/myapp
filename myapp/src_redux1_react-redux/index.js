import React from 'react';
import ReactDOM from 'react-dom';
import {createStore}from 'redux'
import {Provider}from 'react-redux'

import App from './containers/app'
import {count} from './redux/reducers'

const store=createStore(count)

    ReactDOM.render((
        <Provider store={store}>
        <App />
        </Provider>
    ), document.getElementById('root'));


