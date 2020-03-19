import { takeEvery, call, put } from "redux-saga/effects";
import { API } from "../config/api";
import { receiveApiData } from "../_actions/species";
import { GET_SPECIES_LOADED, GET_SPECIES_REQUEST } from "../config/constants";

export function* speciesWatcher() {
  yield takeEvery(GET_SPECIES_REQUEST, speciesSaga);
}

function* speciesSaga() {
  try {
    const payload = yield call(getSpecies);
    yield put(receiveApiData(payload));
  } catch (e) {
    yield put({ type: "API_ERRORED", payload: e });
  }
}

async function getSpecies() {
  const res = await API.get("/species");
  const { data } = res.data;
  console.log(data[0]);
  return data;
}
