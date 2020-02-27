import { combineReducers } from "redux";

import ages from "./ages";
import species from "./species";

export default combineReducers({
  species: species
});
