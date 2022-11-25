import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import {Link} from "react-router-dom"
import "../login.css";
 const Register = () => {
  const [inputs, setInputs] = useState({
    identificación:  "",
    nombre: "",
    apellido:  "",
    correo:  "",
    edad:  "",
    dirección:  "",
    contraseña:  "",
    rol:  ""
 });
  const [mensaje, setMensaje] = useState();
  const [loading, setLoading] = useState(false);
  const {identificación, nombre, apellido, correo, edad, dirección, contraseña,rol} = inputs;

  const onChange = (e) => {
    setInputs({...inputs, [e.target.name]: e.target.value});
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (identificación !== "" && nombre !== "" && apellido !== "" && correo !== "" && edad !== "" && dirección !== "" && contraseña !== "" && rol !== "" ){
      const Usuario = {
        identificación,
        nombre,
        apellido,
        correo,
        edad,
        dirección,
        contraseña,
        rol
      };
      setLoading(true);
      await axios
      .post("http://localhost:4500/usuarios", Usuario)
      .then (({data}) => console.log(data));
    }
  }


  return (
    <div>
         <form onSubmit={(e)=> onSubmit(e)} className="addPRoducto container">
        <h1>Registrar Usuario</h1>
        
          <div className="form-group">
            <label htmlFor="identificación" className="form-label mt-3">
              identificacion
            </label>
            <input
            onChange={(e)=> onChange(e)}
              type="number"
              className="form-control"
              id="identificación"
              placeholder="Ingresa tu numero de identificacion"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="nombre" className="form-label mt-3">
              Nombre de usuario
            </label>
            <input
              onChange={(e)=> onChange(e)}
              type="text"
              className="form-control"
              id="nombre"
              placeholder="nombre"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="apellidos" className="form-label mt-3">
              apellidos
            </label>
            <input
              onChange={(e)=> onChange(e)}
              type="text"
              className="form-control"
              id="apellidos"
              placeholder="apellidos"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="correo" className="form-label mt-3">
              correo
            </label>
            <input
              onChange={(e)=> onChange(e)}
              type="email"
              className="form-control"
              id="correo"
              placeholder="correo"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="edad" className="form-label mt-3">
              edad
            </label>
            <input
              onChange={(e)=> onChange(e)}
              type="number"
              className="form-control"
              id="edad"
              placeholder="edad"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="direccion" className="form-label mt-3">
              Direccion
            </label>
            <input
              onChange={(e)=> onChange(e)}
              type="text"
              className="form-control"
              id="dirección"
              placeholder="Direccion"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contraseña" className="form-label mt-3">
              crear contraseña
            </label>
            <input
              onChange={(e)=> onChange(e)}
              type="password"
              className="form-control"
              id="contraseña"
              placeholder="Ingresa una contraseña"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="Rol" className="form-label mt-1">
              seleccione su Rol
            </label>
            <input
              onChange={(e)=> onChange(e)}
              type="text"
              className="form-control"
              id="rol"
              placeholder="admin/no admin"
              required
            />
          </div>
          

          <button
            type="submit"
            className="btn btn-success"

          >
            Registrar
          </button>

          <Link type="reset" className="btn btn-danger" to="/pages/Login"
          >
            Cancelar
          </Link>
        
      </form>
    </div>
  )
}
export default Register