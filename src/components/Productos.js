import jsonProductos from "../data/bdProductos";
import { useEffect, useState } from "react";
import React from 'react'
import NavbarCliente from "./NavBarCliente";

const Productos = () => {

  var carritoActual = localStorage.getItem('carrito');
  carritoActual = JSON.parse(carritoActual);  

  const [carrito, setCarrito] = useState(carritoActual)

  let currentID = null;
  let currentCantidad = null;

  const agregarCarrito =  function (event) {
    event.preventDefault();

    setCarrito(carritoActual);
    if(carrito && carrito[event.target.idprod.value]) {
      setCarrito({...carrito,[event.target.idprod.value]:parseInt(carrito[event.target.idprod.value]) + parseInt(event.target.cantidad.value)})
    } else {
      setCarrito({...carrito,[event.target.idprod.value]:parseInt(event.target.cantidad.value)})
    }
    
    document.getElementById("cantidad_"+event.target.idprod.value).value = ""

  } 

  useEffect(() => {
    console.log(carrito);
    localStorage.setItem('carrito',JSON.stringify(carrito));
  })

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
                        <p className="card-text">Caracteristicas: {item.características}</p>
                        <p className="card-text">Valor: $ {item.precio}</p>
                        
                       
                    </div>
                    <label htmlFor="cantidad" className="form-label">Cantidad</label>
                        <div className="inp_cantidad">
                        <input name="cantidad"  type="number" id={"cantidad_"+item.id}  className="card-cantidad" /><br/>
                        <button type="submit" className="btn btn-secondary">Agregar</button>
                        <input type="hidden" name="idprod" value={item.id} />
                        </div>
                </div>
            </form>
            ))}
        </div>
    </div>
    
  )
}

export default Productos