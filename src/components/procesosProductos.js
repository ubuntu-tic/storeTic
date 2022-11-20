import axios from "axios";

export const getProducts = async () => {
  const response = await axios.get(
    `http://localhost:3000/productos`
  );
  return response.data;
}

export const getProductByID = async (_id) => {
  const response = await axios.get(
    `http://localhost:3000/productos/${_id}`
  );
  return response.data;
}

