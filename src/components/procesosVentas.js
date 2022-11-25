import axios from "axios";

export const getVentas = async () => {
  const response = await axios.get(
    `http://localhost:3000/ventas`
  );
  return response.data;
}

export const getVentaById = async (_id) => {
  const response = await axios.get(
    `http://localhost:3000/ventas/${_id}`
  );
  return response.data;
}


export const confirmarCompra = async (venta) => {
  const response = await axios.post(
    `http://localhost:3000/ventas`,
    venta
  );
  return response.data;
}
