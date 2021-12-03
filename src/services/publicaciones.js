import Axios from "axios";
const BASE_URL = process.env.REACT_APP_API_URL + "/api/publicaciones";

const createHeader = (token) => {
  return {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
};

/*
 * GET PUBLICACIONES
 */

const getByCategoriaId = async (categoriaId) => {
  try {
    const { data } = await Axios.get(`${BASE_URL}/categorias/${categoriaId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

/*
 * PUT PUBLICACIONES
 */

const putPublicacionById = async (publicacionId, publicacion, tags, user) => {
  try {
    const res = await Axios.put(
      `${BASE_URL}/id/${publicacionId}`,
      publicacion,
      {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: "Bearer " + user.token,
        },
      }
    );
    try {
      await deleteTagsByPublicacionId(publicacionId, user);
      if (tags !== "") {
        try {
          await postTagsByPublicacionId(publicacionId, tags, user);
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log(error);
    }
    return res;
  } catch (error) {
    console.log(error);
  }
};

/*
 * POST PUBLICACIONES
 */

const postPublicacion = async (publicacion, tags, user) => {
  try {
    const resNewPublicacion = await Axios.post(BASE_URL, publicacion, {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: "Bearer " + user.token,
      },
    });
    if (tags !== "") {
      try {
        await postTagsByPublicacionId(
          resNewPublicacion.data.insertId,
          tags,
          user
        );
      } catch (error) {
        console.log(error);
      }
    }
    return resNewPublicacion;
  } catch (error) {
    console.log(error);
    alert("Error al publicar");
  }
};

const postTagsByPublicacionId = async (publicacionId, tags, { token }) => {
  try {
    const newTags = {
      tags: tags.split(", "),
    };
    return await Axios.post(
      `${BASE_URL}/id/${publicacionId}/tags`,
      newTags,
      createHeader(token)
    );
  } catch (error) {
    console.log(error);
  }
};

/*
 * DELETE PUBLICACIONES
 */

const deleteById = async (publicacionId, { token }) => {
  try {
    return await Axios.delete(
      `${BASE_URL}/id/${publicacionId}`,
      createHeader(token)
    );
  } catch (error) {
    console.log(error);
  }
};

const deleteTagsByPublicacionId = async (publicacionId, { token }) => {
  try {
    return await Axios.delete(
      `${BASE_URL}/id/${publicacionId}/tags`,
      createHeader(token)
    );
  } catch (error) {
    console.log(error);
  }
};

export const publicacionesServices = {
  postPublicacion,
  postTagsByPublicacionId,
  putPublicacionById,
  getByCategoriaId,
  deleteById,
  deleteTagsByPublicacionId,
};
