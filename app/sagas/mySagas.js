var call = require('redux-saga/effects').call;
var put = require('redux-saga/effects').put;
var takeEvery = require('redux-saga/effects').takeEvery;

function* catchSmthHappened(action) {
   try {
      const someResult = yield call(()=>'On something had happaned!', action.payload);
      yield put({type: "ON_SMTH_HAPPENED", payload: someResult});
   } catch (e) {
      yield put({type: "ON_SMTH_HAPPENED", payload: 'e.message'});
   }
}

function* myFirstSaga() {
  yield takeEvery("SMTH_HAPPENED", catchSmthHappened);
}

module.exports.myFirstSaga = myFirstSaga;