import jsonProductos from "../data/bdProductos";
import React from 'react'
import Navbar from "./NavBar";
import { Link } from "react-router-dom";
import Modales from "./Modales";



const ProductosAdmin = () => {
  return (
    
    <div >
      
      <Navbar/>

     
      
         
         <div className="row  row-cols-md-5 g-1">
          
         

         

        {jsonProductos.map((item) => (
                <div className="card">
                    <div className="card-body">
                      <div>
                        <img src={item.urlImagen} width="100" className="my-4 mx-auto d-block"/>
                        <h5 className="card-title">Nombre: {item.nombre}</h5>
                        <p className="card-text">Descripcion: {item.descripcion}</p>
                        <p claclassNamess="card-text">Caracteristicas: {item.características}</p>
                        <p claclassNamess="card-text">Valor: $ {item.precio}</p>
                    </div>
                    <div> <p claclassNamess="card-text">stock: {item.stock} unidades disponibles</p></div>
                        
                </div> 
                  <button type="button" className="btn btn-warning">editar</button>
                  <button type="button" className="btn btn-danger">eliminar</button>
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