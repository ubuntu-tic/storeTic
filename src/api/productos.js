import axios from "axios";
import jsonProductos from "../data/bdProductos";

const getProducts = async () => {
  //   const response = await axios.get(
  //     `http://localhost:4500/productos`
  //   );
  return jsonProductos; // response.data
};

const getProductByID = async (_id) => {
  const response = await axios.get(`http://localhost:4500/productos/${_id}`);
  return response.data;
};
const deleteProduct = async (_id) => {
  const response = await axios.delete(`http://localhost:4500/productos/${_id}`);
  return response;
};

export { getProducts, getProductByID, deleteProduct };
