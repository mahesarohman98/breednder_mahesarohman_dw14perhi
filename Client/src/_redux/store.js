import { createStore, combineReducers, applyMiddleware } from "redux";

import species from "../_reducers/species";
import ages from "../_reducers/ages";
import auth from "../_reducers/auth";
import pets from "../_reducers/pets";
import users from "../_reducers/users";
import match from "../_reducers/match";

import { logger, promise } from "../middleware";

// Global state
const rootReducers = combineReducers({
  species,
  ages,
  auth,
  pets,
  users,
  match
});

// Setup store for Redux
const store = createStore(rootReducers, applyMiddleware(logger, promise));

export default store;
