import { GET_PETS, SET_USER_PETS, UPDATE_USER_PETS } from "../config/constants";

// Setup Reducer for Redux
const initialState = {
  data: [],
  userPet: [],
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PETS:
      return {
        ...state,
        userPet: action.payload
      };
    case `${GET_PETS}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_PETS}_FULFILLED`:
      let userId = localStorage.getItem("userId");
      let data = [];
      action.payload.map((item, index) => {
        if (userId == item.breeder.id) data.push(item);
      });
      return {
        ...state,
        data: action.payload,
        userPet: data,
        loading: false
      };
    case `${GET_PETS}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true
      };
    case `${UPDATE_USER_PETS}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${UPDATE_USER_PETS}_FULFILLED`:
      let userId2 = localStorage.getItem("userId");
      let data2 = [];
      action.payload.map((item, index) => {
        if (userId == item.breeder.id) data2.push(item);
      });
      return {
        ...state,
        data: action.payload,
        userPet: data,
        loading: false
      };
    case `${UPDATE_USER_PETS}_REJECTED`:
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
