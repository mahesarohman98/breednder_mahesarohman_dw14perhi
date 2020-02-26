import { takeEvery, call, put } from "redux-saga/effects";
import { API } from "../config/api";
import { GET_SPECIES } from "../config/constants";

export default function* watcherSaga() {
  yield takeEvery("DATA_REQUESTED", workerSaga);
}

function* workerSaga() {
  try {
    const payload = yield call(getData);
    yield put({ type: "DATA_LOADED", payload });
  } catch (e) {
    yield put({ type: "API_ERRORED", payload: e });
  }
}

async function getData() {
  const res = await API.get("/species");
  const { data } = res.data;
  console.log(data[0]);
  return data;

  //   //   return data;
}
