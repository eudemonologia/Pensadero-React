import Axios from "axios";
const BASE_URL = process.env.REACT_APP_API_URL + "/api/tags";

const createHeader = (token) => {
  return {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
};

/*
 * GET TAGS
 */

const getAll = async () => {
  try {
    const { data } = await Axios.get(BASE_URL);
    return data;
  } catch (error) {
    console.log(error);
    alert("Error al obtener los tags");
  }
};

/*
 * DELETE TAGS
 */

const deleteTagById = async (id, { token }) => {
  try {
    const res = await Axios.delete(`${BASE_URL}/id/${id}`, createHeader(token));
    return res;
  } catch (error) {
    console.log(error);
    alert("Error al eliminar el tag");
  }
};

export const tagsServices = {
  getAll,
  deleteTagById,
};
