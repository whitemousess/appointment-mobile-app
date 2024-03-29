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

export const getCurrentUser = async () => {
  try {
    const token = await getToken();
    const res = await httpRequest.get(`auth/current-user`, {
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
    return res.data;
  } catch (error) {
    return error;
  }
};

export const getUser = async ({ page, perPage, fullName }) => {
  try {
    const token = await getToken();
    const res = await httpRequest.get(`auth/get-user`, {
      headers: { Authorization: "Bearer " + token },
      params: {
        page,
        per_page: perPage,
        fullName,
      },
    });
    return res.data;
  } catch (error) {
    return error;
  }
};

export const getDoctorBySickName = async ({ sickName }) => {
  try {
    const res = await httpRequest.get(`auth/get-doctor/${sickName}`);
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

export const editUser = async ({ id, data }) => {
  try {
    const token = await getToken();
    const res = await httpRequest.put(`auth/edit-user/${id}`, data, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (error) {
    return error;
  }
};
