import Axios from "axios";
const BASE_URL = process.env.REACT_APP_API_URL + "/api/usuarios";

/*
 * POST PENSAMIENTOS
 */

const postConectar = (email, password) => {
  try {
    return Axios.post(BASE_URL + "/conectar", { email, password });
  } catch (error) {
    console.log(error);
  }
};

export const usuariosServices = {
  postConectar,
};
