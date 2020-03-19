import { GET_SPECIES } from "../config/constants";
import { API } from "../config/api";

export const getSpecies = () => {
  return {
    type: GET_SPECIES,
    payload: async () => {
      const res = await API.get("/species");
      const { data } = res.data;
      return data;
    }
  };
};
