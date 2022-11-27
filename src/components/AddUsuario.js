import React, { useEffect, useState } from 'react'

function AddUsuario({addFunction,setVerFormulario,datos,setDatos,tipo,updateFunction}) {




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
        
        <form className='addUsuario' onSubmit={manejarSubmit}>
        {tipo === "editar" && <h1>Editar Usuario</h1> }
        {tipo !== "editar" && <h1>Agregar Usuario</h1> }
            <fieldset>
            
                <div className="form-group">
                    <label htmlFor="nombre" className="form-label mt-3">Nombre</label>
                    <input type="text" className="form-control" id="nombre" aria-describedby="nombre" placeholder="Ingresa el nombre de usuario" onChange={actualizarDatos} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="nombre" className="form-label mt-3">Apellido</label>
                    <input type="text" className="form-control" id="apellido" placeholder="apellido" onChange={actualizarDatos} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="descripcion" className="form-label mt-3">Correo</label>
                    <input type="text" className="form-control" id="correo" placeholder="correo" onChange={actualizarDatos} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="características" className="form-label mt-3">Direccion</label>
                    <textarea  type="text" className="form-control" id="direccion" placeholder="direccion" onChange={actualizarDatos} required/>
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="Admin" checked=""/>
                    <label className="form-check-label" for="flexSwitchCheckChecked">Administador</label>
                </div>
                
                <button type="submit" className="btn btn-success" data-accion="editar">Enviar</button>
                
                <button type="reset" className="btn btn-danger">Cancelar</button>
            </fieldset>
        </form>
    </div>
  )
}

export default AddUsuario