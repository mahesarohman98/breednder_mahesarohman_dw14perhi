import { GET_SPECIES } from "../config/constants";
import { API } from "../config/api";

export function getData() {
  return { type: "DATA_REQUESTED" };
}
