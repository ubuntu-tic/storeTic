import React, { useEffect, useState } from 'react'

function AddProducto({addFunction,setVerFormulario}) {

    const [datos, setDatos] = useState({})


    const actualizarDatos =  function (element) {
        const id = element.target.id
        let tempDato = element.target.value
        let tempDatos = datos
        tempDatos[id] = tempDato
        setDatos(tempDatos)
    }    

    const agregarProducto =  function (event) {
        event.preventDefault();
        addFunction(datos)
    }
    
  return (
    <div>
        
        <form className='addPRoducto' onSubmit={agregarProducto}>
        <h1>Agregar Producto</h1>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="urlImagen" className="form-label mt-3">Url Imagen</label>
                    <input type="url" className="form-control" id="urlImagen" aria-describedby="urlImagen" placeholder="Ingresa la url de la Imagen" onChange={actualizarDatos} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="nombre" className="form-label mt-3">Nombre de Producto</label>
                    <input type="text" className="form-control" id="nombre" placeholder="nombre" onChange={actualizarDatos} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="descripcion" className="form-label mt-3">Descripción de Producto</label>
                    <input type="text" className="form-control" id="descripcion" placeholder="descripción" onChange={actualizarDatos} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="características" className="form-label mt-3">Caracteristicas de Producto</label>
                    <textarea  type="text" className="form-control" id="características" placeholder="caracteristicas" onChange={actualizarDatos} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="precio" className="form-label mt-3">Precio de Producto</label>
                    <input type="number" className="form-control" id="precio" placeholder="precio" onChange={actualizarDatos} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="stock" className="form-label mt-1">stock de Producto</label>
                    <input type="number" className="form-control" id="stock" placeholder="unidades disponibles" onChange={actualizarDatos} required/>
                </div>
                <button type="submit" className="btn btn-success">Enviar</button>
                <button type="reset" className="btn btn-danger">Cancelar</button>
            </fieldset>
        </form>
    </div>
  )
}

export default AddProducto