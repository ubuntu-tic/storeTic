
import { random } from "lodash";
import { Component } from "react";
//import jsonProductos from "../data/bdProductos";
import NavbarCliente from "./NavBarCliente";
import { confirmarCompra } from "./procesosVentas";




class CarritoCompras extends Component {


  render() {

    const jsonProductos = JSON.parse(localStorage.getItem('productos'));
    const jsonVentas = JSON.parse(localStorage.getItem('ventas'));

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
              ...jsonProductos.find(obj => obj._id == item),
              cantidad:carritoActual[item]
            })
          }
        })
      }
      console.log("Prueba",miCarrito);
    }

    this.listarProductos()

    
    this.confirmarCompra = function () {

      const today = new Date();
      const yyyy = today.getFullYear();
      let mm = today.getMonth() + 1; // Months start at 0!
      let dd = today.getDate();
      
      if (dd < 10) dd = '0' + dd;
      if (mm < 10) mm = '0' + mm;
      
      //const formattedToday = dd + '/' + mm + '/' + yyyy;      
      const formattedToday = yyyy + '-' + mm + '-' + dd;      
      
      localStorage.setItem('carrito',"{}");
      confirmarCompra({
        fecha:formattedToday,
        valor:totalizar(miCarrito)
      })
      window.location.href=window.location.href
    }
    
    
    this.cancelarCompra = function () {
      miCarrito.map((item) => {
        console.log(item)
        eliminar(item._id,item.cantidad)
      })
      alert("Compra cancelada")
      window.location.href=window.location.href
    }
    
    const totalizar = function (arreglo) {
      let contador = 0;
      for (const elemento of arreglo) {
       contador += Number(elemento.precio * elemento.cantidad);
      }
      return contador;
    };

    const eliminar = function (id,cantidad) {
      console.log(carritoActual[id]);
      carritoActual[id] = 0;
      localStorage.setItem('carrito',JSON.stringify(carritoActual));
      //this.listarProductos();

      let tempProductos = jsonProductos;
      tempProductos.forEach((item,pos) => {
        if (item._id == id)
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
                <td><button className="btn btn-danger" onClick={() => {eliminar(item._id, item.cantidad)}}>eliminar</button></td>
              </tr>
            ))}
            <tr className="tabla-total">
              <th scope="row">Total</th>
              <th></th>
              <td></td>
                
                <td></td>
                <td>${totalizar(miCarrito)}</td>
                <td></td>
            </tr>

          </tbody>
        </table>
        <button type="submit" className="btn btn-outline-success" onClick={this.confirmarCompra}>Confirmar Compra</button>
        <button type="reset" className="btn btn-outline-danger " onClick={this.cancelarCompra}>Cancelar Compra</button>
      </>
    );
  }
}



export default CarritoCompras;
