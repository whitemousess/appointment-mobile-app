import AsyncStorage from "@react-native-async-storage/async-storage";
import { httpRequest } from "~/utils/httprequest";

const getToken = async () => {
  const res = await AsyncStorage.getItem("token");
  return res;
};

export const postStatus = async ({ data }) => {
  try {
    const token = await getToken();
    const res = await httpRequest.post(`recent-post/post-status`, data, {
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

export const getAllStatus = async () => {
  try {
    const token = await getToken();
    const res = await httpRequest.get(`recent-post/get-all`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return res.data;
  } catch (error) {
    return error;
  }
};

export const getMyStatus = async ({ id }) => {
  try {
    const token = await getToken();
    const res = await httpRequest.get(`recent-post/get-my-status/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return res.data;
  } catch (error) {
    return error;
  }
};

export const deleteStatus = async ({ id }) => {
  try {
    const token = await getToken();
    const res = await httpRequest.delete(`recent-post/delete-status/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return res.data;
  } catch (error) {
    return error;
  }
};
