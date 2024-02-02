import AsyncStorage from "@react-native-async-storage/async-storage";
import { httpRequest } from "~/utils/httprequest";

const getToken = async () => {
  const res = await AsyncStorage.getItem("token");
  return res;
};

export const getAppointment = async ({ page, perPage, date, time }) => {
  try {
    const token = await getToken();
    const res = await httpRequest.get(`appointment/get-appointment`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        page,
        per_page: perPage,
        date,
        time,
      },
    });
    return res.data;
  } catch (error) {
    return error;
  }
};

export const getHistoryAppointment = async () => {
  try {
    const token = await getToken();
    const res = await httpRequest.get(`appointment/get-history-appointment`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    return error;
  }
};

export const newAppointment = async ({ data }) => {
  try {
    const token = await getToken();
    const res = await httpRequest.post(`appointment/new-appointment`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    return error;
  }
};
