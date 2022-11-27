import React, { useEffect, useState } from 'react'
import Navbar from "./NavBar";
import { deleteUsuarios, getUsuarios, addUsuario, updateUsuario } from "./procesosUsuarios";
import Modal_usuario from './Modal_usuario';


const UsuariosAdmin = () => {

  const [usuarios, setUsuarios] = useState([]);
  const [datos, setDatos] = useState({})
  const [tipo, setTipo] = useState("agregar")

  useEffect(() => {
    getUsuarios().then((data) => {
      setUsuarios(data);
      console.log(data);
    })
  },[]);


  const [verFormulario, setVerFormulario] = useState(false)

  const eliminar = (element) => {
   //alert("Eliminado articulo con id: " + id);
   const pos = element.target.getAttribute("data-index");
   const id = element.target.getAttribute("data-id");
   deleteUsuarios(id).then((data) => (console.log("usuario eliminado"))).catch((error) => (console.log(error)));
   let usuariosTemp = usuarios.filter(item => item.id !== id);
   setProductos(usuariosTemp)
   window.location.reload()
   
  }  

  
  const agregarUsuario = (datos) => {
    //alert("Agregar producto con datos: " + datos);
    datos.id = usuarios.length + 1
    let tempUsuarios = usuarios;
    tempUsuarios.push(datos)
    localStorage.setItem('usuarios',JSON.stringify(usuarios));
    addUsuario(datos)
    window.location.reload()
  }
  const editarUsuario = (datos) => {
    console.log(datos);
    let tempUsuarios = usuarios;
    setUsuarios(tempUsuarios)
    localStorage.setItem('usuarios',JSON.stringify(tempUsuarios));
    updateUsuario(datos._id,datos)
    window.location.reload()
  }


  const editar = (element) => {
    const pos = element.target.getAttribute("data-index");
    const id = element.target.getAttribute("data-id");
    console.log(usuarios[pos]);
    setTipo("editar")
    setVerFormulario(true)
    setDatos(usuarios[pos])
   
    document.getElementById("nombre").value = usuarios[pos].nombre
    document.getElementById("apellido").value = usuarios[pos].apellido
    document.getElementById("correo").value = usuarios[pos].correo
    document.getElementById("direccion").value = usuarios[pos].direccion
    
    document.getElementById("Admin").value = usuarios[pos].Admin
    
  }
      
    

  return (
    <div >
      <Navbar/>
      <h1>Gestión de Productos</h1>
    <div className="row  row-cols-md-6 g-1">
        {usuarios&&usuarios.map((item,pos) => (
                <div className="card" key={pos}>
                    <div className="card-body">
                      <div>
                       
                        <h5 className="card-title">Nombre: {item.nombre} {item.apellido}</h5>
                        <p className="card-text">Correo: {item.correo}</p>
                        <p className="card-text">Direccion: {item.direccion}</p>
                        
                    </div>
                    <div> <p className="card-text">Admin: {item.Admin}</p></div>
                        
                </div>
                <div className="card-footer"> 
                <div className="btn-group" role="group" aria-label="Basic example"> 
                      <button type="button" className="btn btn-warning" data-id={item.id} data-index={pos} onClick={editar}>Editar 🖊️</button>
                      <button type="button" className="btn btn-danger" data-id={item._id} data-index={pos} onClick={eliminar}>Eliminar 🗑️</button>
                </div>
                </div>
                </div>
            ))}
        </div>
        <div>
        <Modal_usuario addFunction={agregarUsuario} verFormulario={verFormulario} setVerFormulario={setVerFormulario} datos={datos} setDatos={setDatos} tipo={tipo} updateFunction={editarUsuario} />  
      </div>
    </div>
  )
}

export default UsuariosAdmin