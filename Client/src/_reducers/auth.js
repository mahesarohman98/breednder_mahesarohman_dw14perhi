import { POST_LOGIN, GET_AUTH_USER } from "../config/constants";
import { setAuthToken } from "../config/api";
// Setup Reducer for Redux
const initialState = {
  data: [],
  authUser: {},
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_AUTH_USER}_PENDING`:
    case `${POST_LOGIN}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${POST_LOGIN}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false
      };
    case `${GET_AUTH_USER}_FULFILLED`:
      return {
        ...state,
        authUser: action.payload,
        loading: false,
        error: false
      };
    case `${GET_AUTH_USER}_REJECTED`:
    case `${POST_LOGIN}_REJECTED`:
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
