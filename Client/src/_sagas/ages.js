import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { API } from "../config/api";
import { receiveAgesData } from "../_actions/ages";
import { GET_AGES_LOADED, GET_AGES_REQUEST } from "../config/constants";

export function* agesWatcher() {
  yield takeEvery(GET_AGES_REQUEST, agesSaga);
}

function* agesSaga() {
  try {
    const payload = yield call(getAges);
    yield put(receiveAgesData(payload));
  } catch (e) {
    yield put({ type: "API_ERRORED", payload: e });
  }
}

async function getAges() {
  const res = await API.get("/species");
  const { data } = res.data;
  console.log(data[0]);
  return data;

  //   //   return data;
}
