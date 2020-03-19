import { GET_MATCH_STATUS, POST_MATCH } from "../config/constants";

// Setup Reducer for Redux
const initialState = {
  data: [],
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_MATCH_STATUS}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_MATCH_STATUS}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case `${GET_MATCH_STATUS}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default reducer;
