var call = require('redux-saga/effects').call;
var put = require('redux-saga/effects').put;
var takeEvery = require('redux-saga/effects').takeEvery;

var Api = require('../api/api.js');

const api = new Api();

function* onCheckLocation(action) {
  try {
    const position = yield call(api.getPosition, action.payload);

    yield put({type: "LOCATION_CHECKED_SUCCESS", payload: position});

    const positionWeather = yield call(api.getPositionWeather, position);

    yield put({type: "LOCATION_WEATHER_SUCCESS", payload: positionWeather});
  } catch (e) {
    yield put({type: "LOCATION_CHECKED_ERROR", payload: e.message});
  }
}

function* checkLocationSaga() {
  yield takeEvery("CHECK_LOCATION", onCheckLocation);
}

module.exports.checkLocationSaga = checkLocationSaga;