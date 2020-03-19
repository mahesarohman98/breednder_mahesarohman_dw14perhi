import {
  GET_PETS,
  UPDATE_USER_PETS,
  GET_USER_PETS,
  SET_SELECTED_PET
} from "../config/constants";
import { setAuthToken } from "../config/api";
import { API, setToken } from "../config/api";

export const getPets = token => {
  return {
    type: GET_PETS,
    payload: async token => {
      setToken();
      const res = await API.get("/pet");
      const { data } = res.data;
      return data;
    }
  };
};

export const getUserPets = () => {
  return {
    type: GET_USER_PETS,
    payload: async token => {
      setToken();
      const res = await API.get("/my-pet");
      const { data } = res.data;
      return data;
    }
  };
};

export const setSelectedPet = num => {
  return {
    type: SET_SELECTED_PET,
    payload: num
  };
};

export const updateUsers = (pet, token, id) => {
  const Pet = pet;
  const Token = token;
  const Id = id;
  console.log(Pet);

  return {
    type: UPDATE_USER_PETS,
    payload: async () => {
      setToken();
      const res = await API.put(`/pet/${Id}`, {
        name: Pet.namePetValue,
        gender: Pet.genderValue,
        userId: Pet.userId,
        ageId: Pet.ageValue,
        about: Pet.aboutValue,
        photo: Pet.photo
      });
      const { data } = res.data;
      return data;
    }
  };
};
