import { GET_SPECIES } from "../config/constants";

// Setup Reducer for Redux
const initialState = {
  species: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DATA_LOADED":
      return Object.assign({}, state, {
        species: state.species.concat(action.payload)
      });
    default:
      return state;
  }
};

export default reducer;
