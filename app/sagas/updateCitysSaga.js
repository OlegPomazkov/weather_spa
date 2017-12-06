var call = require('redux-saga/effects').call;
var put = require('redux-saga/effects').put;
var takeEvery = require('redux-saga/effects').takeEvery;

var Api = require('../api/api.js');

const api = new Api();

function* onUpdateCitys(action) {
  try {
    const citysWeather = yield call(api.getByIdsWeather, action.payload.ids);
     
    yield put({type: "UPDATE_CITYS_SUCCESS", payload: {weather:citysWeather.list}});
  } catch (e) {
    yield put({type: "UPDATE_CITYS_ERROR", payload: e.message});
  }
}

function* updateCitysSaga() {
  yield takeEvery("UPDATE_ALL_WEATHER", onUpdateCitys);
}

module.exports.updateCitysSaga = updateCitysSaga;