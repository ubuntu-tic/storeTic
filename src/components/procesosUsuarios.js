import axios from "axios";

export const getUsuarios = async () => {
  const response = await axios.get(
    `https://storetic-app.herokuapp.com/usuarios`
  );
  return response.data;
}

export const getUsuarioById = async (_id) => {
  const response = await axios.get(
    `https://storetic-app.herokuapp.com/usuarios/${_id}`
  );
  return response.data;
}

