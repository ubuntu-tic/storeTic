import axios from "axios";

export const getProducts = async () => {
  const response = await axios.get(
    `http://localhost:4500/productos`
  );
  return response.data;
}

export const getProductByID = async (_id) => {
  const response = await axios.get(
    `http://localhost:4500/productos/${_id}`
  );
  return response.data;
}

export const addProduct = async (product) => {
  const response = await axios.post(
    `http://localhost:3000/productos`,
    product
  );
  return response.data;
}

export const updateProduct = async (_id, product) => {
  const response = await axios.put(
    `http://localhost:3000/productos/${_id}`,
    product
  );
  return response.data;
}

export const deleteProduct = async (_id) => {
  const response = await axios.delete(
    `http://localhost:3000/productos/${_id}`
  );
  return response.data;
}

