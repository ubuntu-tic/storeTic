import { Component } from "react";
import jsonVentas from "../data/bdVentas";
import NavBar from "./NavBar";



class MiComponente extends Component {
  render() {
    this.totalizar = function (arreglo = [1, 2, 3]) {
      let contador = 0;
      for (const elemento of arreglo) {
       contador += Number(elemento.valor);
      }
      return "$ " + contador;
    };

    return (
      <>
       <NavBar/>
      <a>Tabla de Ventas</a>
        <table className="table table-hover tabla">
          
          <thead>
            <tr className="tabla-encabezado">
              <th scope="col">Id_venta</th>
              <th scope="col">Fecha_venta</th>
              <th scope="col">Valor</th>
            </tr>
          </thead>
          <tbody>
            {jsonVentas.map((item) => (
              <tr className="tabla-fila">
                <th scope="row">{item.idVenta}</th>
                <td>{item.fecha}</td>
                <td>{`$ ${item.valor}`}</td>
              </tr>
            ))}
            <tr className="tabla-total">
              <th scope="row">Total</th>
              <td></td>
              <td>{this.totalizar(jsonVentas)}</td>
            </tr>

          </tbody>
        </table>
      </>
    );
  }
}


export default MiComponente;
