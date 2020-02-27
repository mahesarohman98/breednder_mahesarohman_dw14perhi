import { GET_AGES } from "../config/constants";
import { API } from "../config/api";

export const getAges = () => {
  return {
    type: GET_AGES,
    payload: async () => {
      const res = await API.get("/ages");
      const { data } = res.data;
      return data;
    }
  };
};
