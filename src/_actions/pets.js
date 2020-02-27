import { GET_PETS, SET_USER_PETS } from "../config/constants";
import { setAuthToken } from "../config/api";
import { API } from "../config/api";

export const getPets = token => {
  const token2 = token;
  return {
    type: GET_PETS,
    payload: async token => {
      setAuthToken(token2);
      const res = await API.get("/pet");
      const { data } = res.data;
      return data;
    }
  };
};

export const setPetUser = payload => {
  return {
    type: SET_USER_PETS,
    payload
  };
};
