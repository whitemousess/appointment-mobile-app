import AsyncStorage from "@react-native-async-storage/async-storage";
import { httpRequest } from "~/utils/httprequest";

const getToken = async () => {
  const res = await AsyncStorage.getItem("token");
  return res;
};

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

export const newDoctor = async ({ data }) => {
  try {
    const token = await getToken();
    const res = await httpRequest.post(`auth/new-doctor`, data, {
      headers: { Authorization: "Bearer " + token },
    });
    return res.data;
  } catch (error) {
    return error;
  }
};

export const getDoctor = async ({ page, perPage, specialist, fullName }) => {
  try {
    const token = await getToken();
    const res = await httpRequest.get(`auth/get-doctor`, {
      headers: { Authorization: "Bearer " + token },
      params: {
        page,
        per_page: perPage,
        specialist,
        fullName,
      },
    });
    return res;
  } catch (error) {
    return error;
  }
};

export const getUser = async () => {
  try {
    const token = await getToken();
    const res = await httpRequest.get(`auth/get-user`, {
      headers: { Authorization: "Bearer " + token },
    });
    return res.data;
  } catch (error) {
    return error;
  }
};

export const deleteUser = async ({ id }) => {
  try {
    const token = await getToken();
    const res = await httpRequest.delete(`auth/user/delete/${id}`, {
      headers: { Authorization: "Bearer " + token },
    });
    return res.data;
  } catch (error) {
    return error;
  }
};
