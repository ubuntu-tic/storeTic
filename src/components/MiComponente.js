import { Component } from "react";
import jsonVentas from "../data/bdVentas";
import data from "../data/data";



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
        <table class="table table-hover tabla">
          <thead>
            <tr class="tabla-encabezado">
              <th scope="col">Id_venta</th>
              <th scope="col">Fecha_venta</th>
              <th scope="col">Valor</th>
            </tr>
          </thead>
          <tbody>
            {jsonVentas.map((item) => (
              <tr class="tabla-fila">
                <th scope="row">{item.idVenta}</th>
                <td>{item.fecha}</td>
                <td>{`$ ${item.valor}`}</td>
              </tr>
            ))}
            <tr class="tabla-total">
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