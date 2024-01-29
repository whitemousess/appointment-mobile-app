import { httpRequest } from "~/utils/httprequest";

export const login = async ({ data }) => {
  try {
    const res = await httpRequest.post(`auth/login`, data);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const register = async ({ data }) => {
  try {
    const res = await httpRequest.post(`auth/register`, data);
    return res.data;
  } catch (error) {
    return error;
  }
};
