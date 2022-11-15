import React from 'react'
import NavBar from './NavBar'
import jsonProductos from "../data/bdProductos";
import Modales from './Modales';

const CrudTable = ({ setEditData, deleteProducto}) => {
    
  return <>
    
    <NavBar/>
    <h2>Catalogo de Productos</h2>
        <div className="row  row-cols-md-5 g-1">
            {jsonProductos.map((item) => (
                <div className="col" key={item.id}>
                    <div className="card">
                        <img src={item.urlImagen} className="card-img-top" alt={item.nombre} />
                        <div className="card-body">
                            <h5 className="card-title">Nombre: {item.nombre}</h5>
                            <p className="card-text">Descripción: {item.descripcion}</p>
                            <p className="card-text">Caracteristicas: {item.características} </p>
                            <p className="card-text">Precio: $ {item.precio}</p>
                        </div>
                        <div>
                            <p claclassNamess="card-text">stock: {item.stock} unidades disponibles</p>
                        </div>
                        <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-warning" onClick={() => setEditData(item)}>Editar ✍️</button>
                        <button type="button" className="btn btn-danger" onClick={() => deleteProducto(item.id)}>Eliminar 🗑️</button>
                    </div>
                    </div> 
                   
                </div>
            ))}
        </div>
        <div>
            <Modales/>
        </div>
        
    </>
}

export default CrudTable