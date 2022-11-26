import axios from "axios";

export const getUsuarios = async () => {
  const response = await axios.get(
    `/usuarios`
  );
  return response.data;
}

export const getUsuarioById = async (_id) => {
  const response = await axios.get(
    `/usuarios/${_id}`
  );
  return response.data;
}

