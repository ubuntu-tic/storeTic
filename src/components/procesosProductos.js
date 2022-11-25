import axios from "axios";

export const getProducts = async () => {
  const response = await axios.get(
    `https://storetic-app.herokuapp.com/productos`
  );
  return response.data;
}

export const getProductByID = async (_id) => {
  const response = await axios.get(
    `https://storetic-app.herokuapp.com/productos/${_id}`
  );
  return response.data;
}

export const addProduct = async (product) => {
  const response = await axios.post(
    `https://storetic-app.herokuapp.com/productos`,
    product
  );
  return response.data;
}

export const updateProduct = async (_id, product) => {
  const response = await axios.put(
    `https://storetic-app.herokuapp.com/productos/${_id}`,
    product
  );
  return response.data;
}

export const deleteProduct = async (_id) => {
  const response = await axios.delete(
    `https://storetic-app.herokuapp.com/productos/${_id}`
  );
  return response.data;
}

