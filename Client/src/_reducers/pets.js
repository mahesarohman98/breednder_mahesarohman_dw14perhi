import {
  GET_PETS,
  UPDATE_USER_PETS,
  GET_USER_PETS,
  SET_SELECTED_PET
} from "../config/constants";

// Setup Reducer for Redux
const initialState = {
  data: [],
  userPet: [],
  selectedPet: {},
  selected: 0,
  loading: false,
  error: false,
  callSelected: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_PET:
      var data = {};
      state.userPet.map((pet, index) => {
        if (index == action.payload) {
          data = pet;
          console.log(state.selectedPet, "guguguguguguguugfufufuufvckufck");
        }
      });

      return {
        ...state,
        selected: action.payload,
        selectedPet: data,
        callSelected: false
      };

    case `${GET_USER_PETS}_PENDING`:
    case `${GET_PETS}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_PETS}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false
      };
    case `${GET_USER_PETS}_FULFILLED`:
      return {
        ...state,
        userPet: action.payload,
        loading: false,
        error: false,
        callSelected: true
      };
    case `${GET_USER_PETS}_REJECTED`:
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
      return {
        ...state,
        loading: false,
        error: false
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
