
import { Component } from "react";
import jsonVentas from "../data/bdVentas";
import NavbarCliente from "./NavBarCliente";




class CarritoCompras extends Component {
  render() {
    this.totalizar = function (arreglo = [1, 2]) {
      let contador = 0;
      for (const elemento of arreglo) {
       contador += Number(elemento.valor);
      }
      return "$ " + contador;
    };

    

    return (
      <>      
      <NavbarCliente/>
      <a>Tabla de carrito</a>
        <table className="table table-hover tabla">
          <thead>
            <tr className="tabla-encabezado">
              <th scope="col">Imagen</th>
              <th scope="col">cantidad</th>
              <th scope="col">Producto</th>
              <th scope="col">Valor</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {jsonVentas.map((item) => (
              
              <tr className="tabla-fila">
                <td>{item.urlImagen}</td>
                <td>{item.detalleCompra.map((mostrar) => (mostrar.cantidad))}</td>
                <td>{item.nombre}</td>
                <td>{`$ ${item.valor}`}</td>
                <td>{`$ ${item.valor*item.detalleCompra.map((mostrar) => (mostrar.cantidad))}`}</td>
              </tr>
            ))}
            <tr className="tabla-total">
              <th scope="row">Total</th>
              <th></th>
              <td></td>
                <td></td>
              <td>{this.totalizar(jsonVentas)}</td>
            </tr>

          </tbody>
        </table>
      </>
    );
  }
}



export default CarritoCompras;
