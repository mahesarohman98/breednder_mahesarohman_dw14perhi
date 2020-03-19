import { POST_LOGIN, GET_AUTH_USER } from "../config/constants";
import { API, setToken } from "../config/api";

export const postLogin = user => {
  const { emailValue, passwordValue } = user;
  return {
    type: POST_LOGIN,
    payload: async user => {
      const res = await API.post("/users/login", {
        email: emailValue,
        password: passwordValue
      });
      const { data } = res.data;
      return data;
    }
  };
};

export const getAuthUser = () => {
  return {
    type: GET_AUTH_USER,
    payload: async () => {
      setToken();
      const res = await API.get("auth");
      const { data } = res.data;
      return data;
    }
  };
};
