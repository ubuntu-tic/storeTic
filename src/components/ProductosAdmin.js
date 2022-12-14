import React, { useEffect, useState } from 'react'
import Navbar from "./NavBar";
import Modales from "./Modales";
import { deleteProduct, getProducts, addProduct, updateProduct } from "./procesosProductos";


const ProductosAdmin = () => {

  const [productos, setProductos] = useState([]);
  const [datos, setDatos] = useState({})
  const [tipo, setTipo] = useState("agregar")

  useEffect(() => {
    getProducts().then((data) => {
      setProductos(data);
      console.log(data);
    })
  },[]);




  
  const [verFormulario, setVerFormulario] = useState(false)

  const eliminar = (element) => {
   //alert("Eliminado articulo con id: " + id);
   const pos = element.target.getAttribute("data-index");
   const id = element.target.getAttribute("data-id");
   deleteProduct(id).then((data) => (console.log("producto eliminado"))).catch((error) => (console.log(error)));
   let productosTemp = productos.filter(item => item.id !== id);
   setProductos(productosTemp)
   window.location.reload()
   
  }

  

  
  const agregarProducto = (datos) => {
    //alert("Agregar producto con datos: " + datos);
    datos.id = productos.length + 1
    let tempProductos = productos;
    tempProductos.push(datos)
    localStorage.setItem('productos',JSON.stringify(productos));
    addProduct(datos)
    window.location.reload()
  }
  const editarProducto = (datos) => {
    console.log(datos);
    let tempProductos = productos;
    setProductos(tempProductos)
    localStorage.setItem('productos',JSON.stringify(tempProductos));
    updateProduct(datos._id,datos)
    window.location.reload()
  }







  

  const editar = (element) => {
    const pos = element.target.getAttribute("data-index");
    const id = element.target.getAttribute("data-id");
    console.log(productos[pos]);
    setTipo("editar")
    setVerFormulario(true)
    setDatos(productos[pos])
    document.getElementById("urlImagen").value = productos[pos].urlImagen
    document.getElementById("nombre").value = productos[pos].nombre
    document.getElementById("descripcion").value = productos[pos].descripcion
    document.getElementById("caracter??sticas").value = productos[pos].caracter??sticas
    document.getElementById("precio").value = productos[pos].precio
    document.getElementById("stock").value = productos[pos].stock
    
  }
      
    

  return (
    <div >
      <Navbar/>
      <h1>Gesti??n de Productos</h1>
    <div className="row  row-cols-md-6 g-1">
        {productos&&productos.map((item,pos) => (
                <div className="card" key={pos}>
                    <div className="card-body">
                      <div>
                        <img src={item.urlImagen} width="100" className="card-img-top" alt={item.nombre}/>
                        <h5 className="card-title">Nombre: {item.nombre}</h5>
                        <p className="card-text">Descripcion: {item.descripcion}</p>
                        <p className="card-text">Caracteristicas: {item.caracter??sticas}</p>
                        <p className="card-text">Valor: $ {item.precio}</p>
                    </div>
                    <div> <p className="card-text">stock: {item.stock} unidades disponibles</p></div>
                        
                </div>
                <div className="card-footer"> 
                <div className="btn-group" role="group" aria-label="Basic example"> 
                      <button type="button" className="btn btn-warning" data-id={item.id} data-index={pos} onClick={editar}>Editar ???????</button>
                      <button type="button" className="btn btn-danger" data-id={item._id} data-index={pos} onClick={eliminar}>Eliminar ???????</button>
                </div>
                </div>
                </div>
            ))}
        </div>
        <div>
        <Modales addFunction={agregarProducto} verFormulario={verFormulario} setVerFormulario={setVerFormulario} datos={datos} setDatos={setDatos} tipo={tipo} updateFunction={editarProducto} />  
      </div>
    </div>
  )
}

export default ProductosAdmin