import axios from "axios";

export const getVentas = async () => {
  const response = await axios.get(
    `/ventas`
  );
  return response.data;
}

export const getVentaById = async (_id) => {
  const response = await axios.get(
    `/ventas/${_id}`
  );
  return response.data;
}


export const confirmarCompra = async (venta) => {
  const response = await axios.post(
    `/ventas`,
    venta
  );
  return response.data;
}
