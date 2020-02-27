import { GET_PETS, SET_USER_PETS } from "../config/constants";

// Setup Reducer for Redux
const initialState = {
  data: [],
  userPet: [],
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_PETS}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_PETS}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case `${GET_PETS}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true
      };
    case SET_USER_PETS:
      return {
        ...state,
        userPet: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
