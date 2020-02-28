import { GET_PETS, SET_USER_PETS, UPDATE_USER_PETS } from "../config/constants";
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

export const setUserPets = item => {
  return {
    type: SET_USER_PETS,
    payload: item
  };
};

export const updateUsers = (data, token, id) => {
  const pet = data;
  const Token = token;
  const Id = id;
  console.log(pet, "===========<><><><<><><>");

  return {
    type: UPDATE_USER_PETS,
    payload: async pet => {
      setAuthToken(Token);
      const res = await API.put(`/pet/${Id}`, {
        name: pet.namePetValue,
        gender: pet.genderValue,
        userId: pet.userId,
        ageId: pet.ageValue,
        about: pet.about,
        photo: pet.photo
      });
      const { data } = res.data;
      return data;
    }
  };
};
