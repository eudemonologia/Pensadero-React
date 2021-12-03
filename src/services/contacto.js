import Axios from "axios";
const BASE_URL = process.env.REACT_APP_API_URL + "/api/contacto";

const enviarMail = async (data) => {
  try {
    return await Axios.post(BASE_URL, data);
  } catch (error) {
    console.log(error);
  }
};

export const contactoServices = {
  enviarMail,
};
