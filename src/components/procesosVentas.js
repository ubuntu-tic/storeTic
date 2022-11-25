import axios from "axios";

export const getVentas = async () => {
  const response = await axios.get(
    `https://storetic-app.herokuapp.com/ventas`
  );
  return response.data;
}

export const getVentaById = async (_id) => {
  const response = await axios.get(
    `https://storetic-app.herokuapp.com/ventas/${_id}`
  );
  return response.data;
}


export const confirmarCompra = async (venta) => {
  const response = await axios.post(
    `https://storetic-app.herokuapp.com/ventas`,
    venta
  );
  return response.data;
}
