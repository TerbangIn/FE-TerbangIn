import { type } from "@testing-library/user-event/dist/type";
import { AxiosResponse } from "axios";

import api from "./api.service";

export const register = async (data) => {
  return await api.post("api/v1/user/register", data);
};

export const login = async (data) => {
  return await api.post("api/v1/user/login", data);
};
