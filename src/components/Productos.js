import jsonProductos from "../data/bdProductos";
import React from 'react'
import NavbarCliente from "./NavBarCliente";

const Productos = () => {
  return (
    <div >

        <NavbarCliente/>
         
         <div class="row  row-cols-md-5 g-1">
        {jsonProductos.map((item) => (
                <div class="card">
                    <div class="card-body">
                        <img src={item.urlImagen} width="100" class="my-4 mx-auto d-block"  />
                        <h5 class="card-title">{item.nombre}</h5>
                        <p class="card-text">{item.descripcion}</p>
                        <p class="card-text">{item.características}</p>
                        <p class="card-text">{item.precio}</p>
                        <label for="cantidad" class="form-label" >Cantidad</label>
                        <div class="inp_cantidad">
                        <input  type="number"  name="cantidad" /><br/>
                        </div>
                        <button type="button" class="btn btn-secondary">Agregar</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
    
  )
}

export default Productos