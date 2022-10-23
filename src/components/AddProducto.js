import React from 'react'
import Navbar from "./NavBar";

const AddProducto = () => {
  return (
    <div>
        <Navbar/>
        <form className='addPRoducto'>
            <fieldset>
                <div class="form-group">
                    <label for="urlImagen" class="form-label mt-4">Url Imagen</label>
                    <input type="url" class="form-control" id="urlImagen" aria-describedby="urlImagen" placeholder="Ingresa la url de la Imagen"/>
                </div>
                <div class="form-group">
                    <label for="nombre" class="form-label mt-4">Nombre de Producto</label>
                    <input type="text" class="form-control" id="nombre" placeholder="nombre"/>
                </div>
                <div class="form-group">
                    <label for="descripcion" class="form-label mt-4">Descripción de Producto</label>
                    <input type="text" class="form-control" id="descripcion" placeholder="descripción"/>
                </div>
                <div class="form-group">
                    <label for="caracteristicas" class="form-label mt-4">Caracteristicas de Producto</label>
                    <textarea  type="text" class="form-control" id="caracteristicas" placeholder="caracteristicas"/>
                </div>
                <div class="form-group">
                    <label for="precio" class="form-label mt-4">Precio de Producto</label>
                    <input type="number" class="form-control" id="precio" placeholder="precio"/>
                </div><br/>
                <button type="submit" class="btn btn-primary">Agregar Producto</button>
            </fieldset>
        </form>
    </div>
  )
}

export default AddProducto