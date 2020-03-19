import { GET_USER } from "../config/constants";
import { API } from "../config/api";

export const getUser = id => {
  const userId = id;
  return {
    type: GET_USER,
    payload: async () => {
      const res = await API.get(`users/${userId}`);
      const { data } = res.data;
      return data;
    }
  };
};
