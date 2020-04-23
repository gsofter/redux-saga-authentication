import { delay, put, takeLatest, takeEvery } from "redux-saga/effects";
import * as actions from "../reducers";
function* authSaga(action) {
  yield put(actions.loginStart());
  yield delay(1500);
  const { email, password } = action.payload;
  if (email === "aaa@aaa.com" && password === "aaa")
    yield put(actions.loginSuccess());
  else yield put(actions.loginFailed());
}

export default function* rootSaga() {
  yield takeEvery(actions.LOGIN_REQUEST, () => console.log("LOGIN_REQUEST"));
  yield takeLatest(actions.LOGIN_REQUEST, authSaga);
}
