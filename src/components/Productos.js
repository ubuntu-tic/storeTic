import jsonProductos from "../data/bdProductos";
import React from 'react'
import NavbarCliente from "./NavBarCliente";

const Productos = () => {

  let currentID = null;
  let currentCantidad = null;

  const agregarCarrito =  function (event) {
    event.preventDefault();
    /*
    var carritoActual = localStorage.getItem('carrito');
    carritoActual = JSON.parse(carritoActual);
    let encontrado = null;



    carritoActual[currentID] += currentCantidad;
    localStorage.setItem('carrito',JSON.stringify(carritoActual));
    */
   
  } 

  return (
    <div >

        <NavbarCliente/>
         
         <div className="row  row-cols-md-5 g-1">
        {jsonProductos.map((item) => (
            <form onSubmit={agregarCarrito}>
                <div className="card">
                    <div className="card-body">
                        <img src={item.urlImagen} width="100" className="my-4 mx-auto d-block"/>
                        <h5 className="card-title">Nombre: {item.nombre}</h5>
                        <p className="card-text">Descripcion: {item.descripcion}</p>
                        <p claclassNamess="card-text">Caracteristicas: {item.características}</p>
                        <p claclassNamess="card-text">Valor: $ {item.precio}</p>
                       
                    </div>
                    <label for="cantidad" className="form-label">Cantidad</label>
                        <div className="inp_cantidad">
                        <input  type="number" id={"cantidad_"+item.id}   className="card-cantidad" /><br/>
                        <button type="submit" className="btn btn-secondary" onClick={() => {currentID = item.id; currentCantidad = document.getElementById("cantidad_"+item.id).value}}>Agregar</button>
                        <input type="hidden" id={"producto_"+item.id} value={item.id} />
                        </div>
                </div>
            </form>
            ))}
        </div>
    </div>
    
  )
}

export default Productos