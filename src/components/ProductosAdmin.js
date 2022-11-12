import jsonProductos from "../data/bdProductos";
import React from 'react'
import Navbar from "./NavBar";
import Modales from "./Modales";


const ProductosAdmin = () => {

  const eliminar = (id) => {
   alert("Eliminado articulo con id: " + id);
  }

  const editar = (id) => {
    alert("Editar producto con id: " + id);
  }
      
    

  return (
    <div >
      <Navbar/>
      <h1>Gestión de Productos</h1>
    <div className="row  row-cols-md-6 g-1">
        {jsonProductos.map((item) => (
                <div className="card">
                    <div className="card-body">
                      <div>
                        <img src={item.urlImagen} width="100" className="card-img-top" alt={item.nombre}/>
                        <h5 className="card-title">Nombre: {item.nombre}</h5>
                        <p className="card-text">Descripcion: {item.descripcion}</p>
                        <p claclassNamess="card-text">Caracteristicas: {item.características}</p>
                        <p claclassNamess="card-text">Valor: $ {item.precio}</p>
                    </div>
                    <div> <p claclassNamess="card-text">stock: {item.stock} unidades disponibles</p></div>
                        
                </div> 
                  <button type="button" className="btn btn-warning" onClick={editar}>Editar 🖊️</button>
                  <button type="button" className="btn btn-danger" onClick={eliminar}>Eliminar 🗑️</button>
                </div>
            ))}
        </div>
        <div>
        <Modales/>  
      </div>
    </div>
  )
}

export default ProductosAdmin