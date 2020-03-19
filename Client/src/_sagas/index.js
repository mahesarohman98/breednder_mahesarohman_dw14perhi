import { all, fork } from "redux-saga/effects";
import * as speciesSagas from "./species";
import * as agesSagas from "./ages";

export default function* rootSaga() {
  yield all(
    [...Object.values(speciesSagas), ...Object.values(agesSagas)].map(fork)
  );
}
