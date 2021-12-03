import Axios from "axios";
const BASE_URL = process.env.REACT_APP_API_URL + "/api/categorias";

/*
 * GET CATEGORIAS
 */

const getAll = async () => {
  try {
    const { data } = await Axios.get(BASE_URL);
    return data;
  } catch (error) {
    console.log(error);
    alert("Error al obtener las categorias");
  }
};

export const categoriasServices = {
  getAll,
};
