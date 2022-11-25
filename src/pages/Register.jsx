import React from 'react'
import {Link} from "react-router-dom"
import "../login.css";
 const Register = () => {
  return (
    <div>
         <form className="addPRoducto container">
        <h1>Registrar Usuario</h1>
        <fieldset>
          <div className="form-group">
            <label htmlFor="identificacion" className="form-label mt-3">
              identificacion
            </label>
            <input
              type="number"
              className="form-control"
              id="identificacion"
              placeholder="Ingresa tu numero de identificacion"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="nombre" className="form-label mt-3">
              Nombre de usuario
            </label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              placeholder="nombre"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="apellidos" className="form-label mt-3">
              apelidos
            </label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              placeholder="apellidos"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="correo" className="form-label mt-3">
              correo
            </label>
            <input
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
              type="text"
              className="form-control"
              id="direccion"
              placeholder="Direccion"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contraseña" className="form-label mt-3">
              crear contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="identificacion"
              placeholder="Ingresa una contraseña"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="Rol" className="form-label mt-1">
              seleccione su Rol
            </label>
            <select classname= "select" name="select">
                <option value="value1" selected>seleccione una opcion</option>
                <option value="value2">admin</option>
                <option value="value3" >no admin</option>
            </select>
          </div>
          

          <button
            type="submit"
            className="btn btn-success"
            data-accion="editar"
          >
            Registrar
          </button>

          <Link type="reset" className="btn btn-danger" to="/pages/Login"
          >
            Cancelar
          </Link>
        </fieldset>
      </form>
    </div>
  )
}
export default Register