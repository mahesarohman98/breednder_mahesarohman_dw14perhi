import { GET_USER } from "../config/constants";

// Setup Reducer for Redux
const initialState = {
  data: [],
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_USER}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_USER}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case `${GET_USER}_REJECTED`:
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
