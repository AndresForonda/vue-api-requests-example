import api from "../../api";
import { URLS } from "./urls";

const getRandomDog = async () => {
  const { data } = await api.get(URLS.getRandomDog, {
    baseURL: URLS.baseURL,
  });
  return data;
};

const getDogsByBreed = async (breed) => {
  const url = `/breed/${breed}/images`;
  const { data } = await api.get(url, {
    baseURL: URLS.baseURL,
  });
  return data;
};

export default {
  getDogsByBreed,
  getRandomDog,
};
