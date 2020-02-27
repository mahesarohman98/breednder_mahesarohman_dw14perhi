import { createStore, combineReducers, applyMiddleware } from "redux";

import species from "../_reducers/species";
import ages from "../_reducers/ages";
import auth from "../_reducers/auth";
import pets from "../_reducers/pets";
import { logger, promise } from "../middleware";

// Global state
const rootReducers = combineReducers({
  species,
  ages,
  auth,
  pets
});

// Setup store for Redux
const store = createStore(rootReducers, applyMiddleware(logger, promise));

export default store;
