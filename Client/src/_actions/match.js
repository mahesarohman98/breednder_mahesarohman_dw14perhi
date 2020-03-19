import { GET_MATCH_STATUS, POST_MATCH } from "../config/constants";
import { setAuthToken } from "../config/api";
import { API } from "../config/api";

export const getMatchStatus = (petId, status, token) => {
  console.log("00000000000000000000000000000");

  return {
    type: GET_MATCH_STATUS,
    payload: async () => {
      setAuthToken(token);
      const res = await API.patch(`/match/?pet_id=${petId}&status=${status}`);
      const { data } = res.data;
      return data;
    }
  };
};

export const postMatch = (petId, petIdLiked, token) => {
  return {
    type: POST_MATCH,
    payload: async () => {
      setAuthToken(token);
      const res = await API.post("/match/", {
        pet_id: petId,
        pet_id_liked: petIdLiked
      });
      const { data } = res.data;
      return data;
    }
  };
};
