import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//=========BUAT REDUX=======
import ReduxThunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import Reducers from './redux/2.reducers'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter} from 'react-router-dom'
//=============================
import * as serviceWorker from './serviceWorker';

const globalStore = createStore(Reducers, {}, applyMiddleware(ReduxThunk))
ReactDOM.render(<Provider store={globalStore}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
