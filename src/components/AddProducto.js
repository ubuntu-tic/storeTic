import React from 'react'
import Index from "../pages/Index"
const AddProducto = () => {
  return (
    <div>
        <Index/>
        <form className='addPRoducto'>
            <fieldset>
                <div className="form-group">
                    <label for="urlImagen" className="form-label mt-4">Url Imagen</label>
                    <input type="url" className="form-control" id="urlImagen" aria-describedby="urlImagen" placeholder="Ingresa la url de la Imagen"/>
                </div>
                <div className="form-group">
                    <label for="nombre" className="form-label mt-4">Nombre de Producto</label>
                    <input type="text" className="form-control" id="nombre" placeholder="nombre"/>
                </div>
                <div className="form-group">
                    <label for="descripcion" className="form-label mt-4">Descripción de Producto</label>
                    <input type="text" className="form-control" id="descripcion" placeholder="descripción"/>
                </div>
                <div className="form-group">
                    <label for="caracteristicas" className="form-label mt-4">Caracteristicas de Producto</label>
                    <textarea  type="text" className="form-control" id="caracteristicas" placeholder="caracteristicas"/>
                </div>
                <div className="form-group">
                    <label for="precio" className="form-label mt-4">Precio de Producto</label>
                    <input type="number" className="form-control" id="precio" placeholder="precio"/>
                </div><br/>
                <button type="submit" className="btn btn-primary">Agregar Producto</button>
            </fieldset>
        </form>
    </div>
  )
}

export default AddProducto