var ReactDOM = require('react-dom');
var React = require('react');
var redux = require('redux');
var Provider = require('react-redux').Provider;
var configureStore = require('./store/configureStore');
var WeatherReport = require('./containers/WeatherReport.js');
   
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <WeatherReport />
  </Provider>,
  document.getElementById('app')
);
