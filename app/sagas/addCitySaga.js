var call = require('redux-saga/effects').call;
var put = require('redux-saga/effects').put;
var takeEvery = require('redux-saga/effects').takeEvery;

var Api = require('../api/api.js');

const api = new Api();

function* onAddCity(action) {
  try {
    const cityWeather = yield call(api.getByNameWeather, action.payload.cityName);
     
    yield put({type: "ADD_CITY_SUCCESS", payload: {weather:cityWeather}});
  } catch (e) {
    yield put({type: "ADD_CITY_ERROR", payload: e.message});
  }
}

function* addCitySaga() {
  yield takeEvery("ADD_CITY", onAddCity);
}

module.exports.addCitySaga = addCitySaga;