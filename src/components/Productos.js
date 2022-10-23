import jsonProductos from "../data/bdProductos";
import React from 'react'
import NavbarCliente from "./NavBarCliente";

const Productos = () => {
  return (
    <div >

        <NavbarCliente/>
         
         <div className="row  row-cols-md-5 g-1">
        {jsonProductos.map((item) => (
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
                        <input  type="number"  className="card-cantidad" /><br/>
                        <button type="button" className="btn btn-secondary">Agregar</button>
                        </div>
                </div>
                
            ))}
        </div>
    </div>
    
  )
}

export default Productos