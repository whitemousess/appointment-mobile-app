import AsyncStorage from "@react-native-async-storage/async-storage";
import { httpRequest } from "~/utils/httprequest";

const getToken = async () => {
  const res = await AsyncStorage.getItem("token");
  return res;
};

export const commentStatus = async ({ data }) => {
  try {
    const token = await getToken();
    const res = await httpRequest.post(`comment-post/comment-status`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    return error;
  }
};

export const getComment = async ({ id }) => {
  try {
    const token = await getToken();
    const res = await httpRequest.get(`comment-post/get-comment-post/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    return error;
  }
};
