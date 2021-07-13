import api from "../../api";
import { URLS } from "./urls";

const getAll = async () => {
  const { data } = await api.get(URLS.users, {
    baseURL: URLS.baseURL,
  });
  return data;
};

const find = async (id) => {
  const url = `${URLS.users}/${id}`;
  const { data } = await api.get(url, {
    baseURL: URLS.baseURL,
  });
  return data;
};

const create = async (payload) => {
  const { data } = await api.post(URLS.users, payload, {
    baseURL: URLS.baseURL,
  });
  return data;
};

export default {
  create,
  find,
  getAll,
};
