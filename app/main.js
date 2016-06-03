import 'babel-polyfill';
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
var css = require("./scss/main.scss");

// Temporary API Stub
import API from './api.js';
console.log(API);

ReactDOM.render(<App/>, document.getElementById('app'));
