import React, { useEffect, useState } from 'react'

function AddProducto({addFunction,setVerFormulario,datos,setDatos,tipo,updateFunction}) {




    const actualizarDatos =  function (element) {
        const id = element.target.id
        let tempDato = element.target.value
        let tempDatos = datos
        tempDatos[id] = tempDato
        setDatos(tempDatos)
    }    

    const manejarSubmit =  function (event) {
        event.preventDefault();
        const accion = event.target.getAttribute("data-accion");
        console.log(accion);
        if (tipo != "editar")
            addFunction(datos)
        else
            updateFunction(datos)
    }
    
  return (
    <div>
        
        <form className='addPRoducto' onSubmit={manejarSubmit}>
        {tipo == "editar" && <h1>Editar Producto</h1> }
        {tipo != "editar" && <h1>Agregar Producto</h1> }
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
                
                <button type="submit" className="btn btn-success" data-accion="editar">Enviar</button>
                
                <button type="reset" className="btn btn-danger">Cancelar</button>
            </fieldset>
        </form>
    </div>
  )
}

export default AddProducto