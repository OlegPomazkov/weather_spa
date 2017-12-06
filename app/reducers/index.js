var combineReducers = require('redux').combineReducers;

var errorReducer = require('../reducers/errorReducer.js');
var allWeatherReducer = require('../reducers/allWeatherReducer.js');
var myWeatherReducer = require('../reducers/myWeatherReducer.js');
var myPositionReducer = require('../reducers/myPositionReducer.js');

const mainReducer = combineReducers({
  myPositionReducer,
  myWeatherReducer,
  allWeatherReducer,
  errorReducer
});

module.exports = mainReducer;
