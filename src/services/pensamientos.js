import Axios from "axios";
const BASE_URL = process.env.REACT_APP_API_URL + "/api/pensamientos";

const createHeader = (token) => {
  return {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
};

/*
 * GET PENSAMIENTOS
 */

const getAll = async () => {
  try {
    const { data } = await Axios.get(BASE_URL);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getAleatorios = async () => {
  try {
    const { status, data } = await Axios.get(BASE_URL + "/aleatorios");
    if (status === 200) {
      return data;
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
  }
};

/*
 * POST PENSAMIENTOS
 */

const create = async (pensamiento, { token }) => {
  try {
    const res = await Axios.post(BASE_URL, pensamiento, createHeader(token));
    return res;
  } catch (error) {
    console.log(error);
  }
};

/*
 * DELETE PENSAMIENTOS
 */

const deleteById = async (id, { token }) => {
  try {
    const res = await Axios.delete(`${BASE_URL}/id/${id}`, createHeader(token));
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const pensamientosServices = {
  create,
  getAll,
  getAleatorios,
  deleteById,
};
