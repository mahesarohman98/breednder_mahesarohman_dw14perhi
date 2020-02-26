import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import species from "../_reducers/species";
import createSagaMiddleware from "redux-saga";
import apiSaga from "../_sagas/api-saga";

const initialiseSagaMiddleware = createSagaMiddleware();
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Global state
// const rootReducers = combineReducers({
//     species
// });

// Setup store for Redux
const store = createStore(species, applyMiddleware(initialiseSagaMiddleware));

initialiseSagaMiddleware.run(apiSaga);

export default store;
