import jsonProductos from "../data/bdProductos";
import React, { useEffect, useState } from 'react'
import Navbar from "./NavBar";
import Modales from "./Modales";


const ProductosAdmin = () => {

  const listadoProductos = JSON.parse(localStorage.getItem('productos'));
  const [productos, setProductos] = useState(listadoProductos)
  const [datos, setDatos] = useState({})

  
  const [verFormulario, setVerFormulario] = useState(false)

  const eliminar = (element) => {
   //alert("Eliminado articulo con id: " + id);
   const pos = element.target.getAttribute("data-index");
   const id = element.target.getAttribute("data-id");
   let productosTemp = productos.filter(item => item.id != id);
   setProductos(productosTemp)
   
  }

  useEffect(() => {
    
    localStorage.setItem('productos',JSON.stringify(productos));
  })

  
  const agregarProducto = (datos) => {
    //alert("Agregar producto con datos: " + datos);
    datos.id = productos.length + 1
    let tempProductos = productos;
    tempProductos.push(datos)
    localStorage.setItem('productos',JSON.stringify(productos));
    window.location.reload()
  }

  const editar = (element) => {
    const pos = element.target.getAttribute("data-index");
    const id = element.target.getAttribute("data-id");
    console.log(productos[pos]);
    setDatos(productos[pos])
    setVerFormulario(true)
  }
      
    

  return (
    <div >
      <Navbar/>
      <h1>Gestión de Productos</h1>
    <div className="row  row-cols-md-6 g-1">
        {productos.map((item,pos) => (
                <div className="card" key={item.id}>
                    <div className="card-body">
                      <div>
                        <img src={item.urlImagen} width="100" className="card-img-top" alt={item.nombre}/>
                        <h5 className="card-title">Nombre: {item.nombre}</h5>
                        <p className="card-text">Descripcion: {item.descripcion}</p>
                        <p className="card-text">Caracteristicas: {item.características}</p>
                        <p className="card-text">Valor: $ {item.precio}</p>
                    </div>
                    <div> <p className="card-text">stock: {item.stock} unidades disponibles</p></div>
                        
                </div> 
                  <button type="button" className="btn btn-warning" data-id={item.id} data-index={pos} onClick={editar}>Editar 🖊️</button>
                  <button type="button" className="btn btn-danger" data-id={item.id} data-index={pos} onClick={eliminar}>Eliminar 🗑️</button>
                </div>
            ))}
        </div>
        <div>
        <Modales addFunction={agregarProducto} verFormulario={verFormulario} setVerFormulario={setVerFormulario} datos={datos} setDatos={setDatos} />  
      </div>
    </div>
  )
}

export default ProductosAdmin