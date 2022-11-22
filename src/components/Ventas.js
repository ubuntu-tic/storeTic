import React, { useEffect, useState } from "react";
//import jsonVentas from "../data/bdVentas";
import NavBar from "./NavBar";
import { getVentas } from "./procesosVentas";


const MiComponente = () => {

  const [ventas, setVentas] = useState([])
  
  useEffect(() => {
    getVentas().then((data) => {
      setVentas(data);
    })
  },[]);


    const totalizar = function (arreglo) {
      if (arreglo) {
        let contador = 0;
        for (const elemento of arreglo) {
        contador += Number(elemento.valor);
        }
        return "$ " + contador;
      }
    };

    return (
      <>
       <NavBar/>
       <h1>Lista de Ventas</h1>
        <table className="table table-hover tabla">
          
          <thead>
            <tr className="tabla-encabezado">
              <th scope="col">Id_venta</th>
              <th scope="col">Fecha_venta</th>
              <th scope="col">Valor</th>
            </tr>
          </thead>
          <tbody>
            {ventas.map((item) => (
              <tr className="tabla-fila">
                <th scope="row">{item.idVenta}</th>
                <td>{item.fecha}</td>
                <td>$ {`${item.valor}`}</td>
              </tr>
            ))}
            <tr className="tabla-total">
              <th scope="row">Total</th>
              <td></td>
              <td>{totalizar(ventas)}</td>
            </tr>

          </tbody>
        </table>
      </>
    );
}

export default MiComponente
