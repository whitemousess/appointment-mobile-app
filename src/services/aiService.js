import AsyncStorage from "@react-native-async-storage/async-storage";
import { httpRequest } from "~/utils/httprequest";

const getToken = async () => {
  const res = await AsyncStorage.getItem("token");
  return res;
};

export const getPredictDiseases = async ({ data }) => {
  try {
    const res = await httpRequest.post(`appointment/predict-diseases`, {
      sicks: data,
    });
    return res.data;
  } catch (error) {
    return error;
  }
};

export const sentChat = async ({ data }) => {
  try {
    const token = await getToken();
    const res = await httpRequest.post(`chat/sent-chat`, {
      message: data,
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    return error;
  }
}