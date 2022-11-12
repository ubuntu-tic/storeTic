import React from 'react'

function AddProducto() {
    
  return (
    <div>
        
        <form className='addPRoducto'>
        <h1>Agregar Producto</h1>
            <fieldset>
                <div className="form-group">
                    <label for="urlImagen" className="form-label mt-3">Url Imagen</label>
                    <input type="url" className="form-control" id="urlImagen" aria-describedby="urlImagen" placeholder="Ingresa la url de la Imagen"/>
                </div>
                <div className="form-group">
                    <label for="nombre" className="form-label mt-3">Nombre de Producto</label>
                    <input type="text" className="form-control" id="nombre" placeholder="nombre"/>
                </div>
                <div className="form-group">
                    <label for="descripcion" className="form-label mt-3">Descripción de Producto</label>
                    <input type="text" className="form-control" id="descripcion" placeholder="descripción"/>
                </div>
                <div className="form-group">
                    <label for="caracteristicas" className="form-label mt-3">Caracteristicas de Producto</label>
                    <textarea  type="text" className="form-control" id="caracteristicas" placeholder="caracteristicas"/>
                </div>
                <div className="form-group">
                    <label for="precio" className="form-label mt-3">Precio de Producto</label>
                    <input type="number" className="form-control" id="precio" placeholder="precio"/>
                </div>
                <div className="form-group">
                    <label for="stock" className="form-label mt-1">stock de Producto</label>
                    <input type="number" className="form-control" id="stock" placeholder="unidades disponibles"/>
                </div>
                <button type="submit" className="btn btn-success">Enviar</button>
                <button type="reset" className="btn btn-danger">Cancelar</button>
            </fieldset>
        </form>
    </div>
  )
}

export default AddProducto