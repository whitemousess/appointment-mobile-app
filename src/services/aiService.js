import { httpRequest } from "~/utils/httprequest";

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
