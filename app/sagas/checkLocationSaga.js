var call = require('redux-saga/effects').call;
var put = require('redux-saga/effects').put;
var takeEvery = require('redux-saga/effects').takeEvery;

var getPosition = require('../api/api.js').getPosition;
var getPositionWeather = require('../api/api.js').getPositionWeather;

function* onCheckLocation(action) {
  try {
    const position = yield call(getPosition, action.payload);
    yield put({type: "LOCATION_CHECKED_SUCCESS", payload: position});

    console.log(position); // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1

     const positionWeather = yield call(getPositionWeather, position);
     yield put({type: "LOCATION_WEATHER_SUCCESS", payload: positionWeather});
  } catch (e) {
    yield put({type: "LOCATION_CHECKED_ERROR", payload: e.message});
  }
}

function* checkLocationSaga() {
  yield takeEvery("CHECK_LOCATION", onCheckLocation);
}

module.exports.checkLocationSaga = checkLocationSaga;