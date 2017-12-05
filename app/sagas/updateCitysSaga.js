var call = require('redux-saga/effects').call;
var put = require('redux-saga/effects').put;
var takeEvery = require('redux-saga/effects').takeEvery;

var getByIdsWeather = require('../api/api.js').getByIdsWeather;

function* onUpdateCitys(action) {
  try {
     const citysWeather = yield call(getByIdsWeather, action.payload.ids);
     
     yield put({type: "UPDATE_CITYS_SUCCESS", payload: {weather:citysWeather.list}});
  } catch (e) {
    yield put({type: "UPDATE_CITYS_ERROR", payload: e.message});
  }
}

function* updateCitysSaga() {
  yield takeEvery("UPDATE_ALL_WEATHER", onUpdateCitys);
}

module.exports.updateCitysSaga = updateCitysSaga;