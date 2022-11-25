import axios from "axios";

export const getUsuarios = async () => {
  const response = await axios.get(
    `http://localhost:3000/usuarios`
  );
  return response.data;
}

export const getUsuarioById = async (_id) => {
  const response = await axios.get(
    `http://localhost:3000/usuarios/${_id}`
  );
  return response.data;
}

