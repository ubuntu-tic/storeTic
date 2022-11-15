
import { Component } from "react";
//import jsonProductos from "../data/bdProductos";
import NavbarCliente from "./NavBarCliente";




class CarritoCompras extends Component {


  render() {

    const jsonProductos = JSON.parse(localStorage.getItem('productos'));

    let carritoActual;
    let miCarrito = [];
    this.listarProductos = function (arreglo) {
      carritoActual = localStorage.getItem('carrito');
      carritoActual = JSON.parse(carritoActual);           
      
      if (carritoActual) {
        Object.keys(carritoActual).forEach((item)=> {
          if (carritoActual[item] > 0) {
            console.log(item);
            miCarrito.push({
              ...jsonProductos.find(obj => obj.id == item),
              cantidad:carritoActual[item]
            })
          }
        })
      }
      console.log("Prueba",miCarrito);
    }

    this.listarProductos()

    

    
    this.totalizar = function (arreglo) {
      let contador = 0;
      for (const elemento of arreglo) {
       contador += Number(elemento.precio * elemento.cantidad);
      }
      return "$ " + contador;
    };

    this.eliminar = function (id,cantidad) {
      console.log(carritoActual[id]);
      carritoActual[id] = 0;
      localStorage.setItem('carrito',JSON.stringify(carritoActual));
      this.listarProductos();

      let tempProductos = jsonProductos;
      tempProductos.forEach((item,pos) => {
        if (item.id == id)
          tempProductos[pos].stock += cantidad
      })      

      localStorage.setItem('productos',JSON.stringify(tempProductos));

      window.location.href=window.location.href
      
    }

    

    return (
      <>      
      <NavbarCliente/>
      <h1>Carrito de Compras</h1>
        <table className="table table-hover tabla">
          <thead>
            <tr className="tabla-encabezado">
              <th scope="col">Imagen</th>
              <th scope="col">cantidad</th>
              <th scope="col">Producto</th>
              <th scope="col">Valor</th>
              <th scope="col">Total</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {miCarrito.map((item) => (

              <tr className="tabla-fila">
                <td><img src={item.urlImagen} width="100" /></td>
                <td>{item.cantidad}</td>
                <td>{item.nombre}</td>
                <td>{`$ ${item.precio}`}</td>
                <td>{`$ ${item.precio*item.cantidad}`}</td>
                <td><button className="btn btn-danger" onClick={() => {this.eliminar(item.id, item.cantidad)}}>eliminar</button></td>
              </tr>
            ))}
            <tr className="tabla-total">
              <th scope="row">Total</th>
              <th></th>
              <td></td>
                
                <td></td>
                <td>{this.totalizar(miCarrito)}</td>
                <td></td>
            </tr>

          </tbody>
        </table>
        <button type="submit" className="btn btn-outline-success">Confirmar Compra</button>
        <button type="reset" className="btn btn-outline-danger ">Cancelar Compra</button>
      </>
    );
  }
}



export default CarritoCompras;
