var call = require('redux-saga/effects').call;
var put = require('redux-saga/effects').put;
var takeEvery = require('redux-saga/effects').takeEvery;

// const transferPosition = (pos) => {
//   console.log(' Current position is -----> ', pos )

//   return pos;  
// }

var getPosition = function (options) {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}

// let promise = fetch(url[, options]);
// http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=6ce71fb06f22461d1c7cb767e557edf6
// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}

var getPositionWeather = function (position) {
  let lon = position.coords.longitude;
  let lat = position.coords.latitude;
  let key = '6ce71fb06f22461d1c7cb767e557edf6';

  let url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&APPID=' + key;


  return fetch(url);
}


function* onCheckLocation(action) {
  try {
    const position = yield call(getPosition, action.payload);
    yield put({type: "LOCATION_CHECKED_SUCCESS", payload: position});

    console.log(position);
    // debugger; 
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