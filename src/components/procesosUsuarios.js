import axios from "axios";

export const getUsuarios = async () => {
  const response = await axios.get(
    `http://localhost:3000/usuarios`
  );
  return response.data;
}

export const getUsuarioByID = async (_id) => {
  const response = await axios.get(
    `http://localhost:3000/usuarios/${_id}`
  );
  return response.data;
}

export const addUsuario = async (usuario) => {
  const response = await axios.post(
    `http://localhost:3000/usuarios`,
    product
  );
  return response.data;
}

export const updateUsuario = async (_id, usuario) => {
  const response = await axios.put(
    `http://localhost:3000/usuarios/${_id}`,
    product
  );
  return response.data;
}

export const deleteUsuarios = async (_id) => {
  const response = await axios.delete(
    `http://localhost:3000/usuarios/${_id}`
  );
  return response.data;
}

