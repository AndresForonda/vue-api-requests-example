import api from "../../api";
import { URLS } from "./urls";

const getRandomBeer = async () => {
  const { data } = await api.get(URLS.getRandomBeer, {
    baseURL: URLS.baseURL,
  });
  return data;
};

export default {
  getRandomBeer,
};
