import { POST_LOGIN } from "../config/constants";
import { API } from "../config/api";

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
