var ReactDOM = require('react-dom');
var React = require('react');
var redux = require('redux');
var Provider = require('react-redux').Provider;
var sagaMiddleware = require('./store/configureStore').sagaMiddleware;
var configureStore = require('./store/configureStore').store;

var WeatherReport = require('./containers/WeatherReport.js');

var checkLocationSaga = require("./sagas/checkLocationSaga.js").checkLocationSaga;
var addCitySaga = require("./sagas/addCitySaga.js").addCitySaga;
var updateCitysSaga = require("./sagas/updateCitysSaga.js").updateCitysSaga;
   
const store = configureStore();

sagaMiddleware.run(checkLocationSaga);
sagaMiddleware.run(addCitySaga);
sagaMiddleware.run(updateCitysSaga);

ReactDOM.render(
  <Provider store={store}>
    <WeatherReport />
  </Provider>,
  document.getElementById('app')
);
