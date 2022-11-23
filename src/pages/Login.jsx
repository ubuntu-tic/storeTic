import React from 'react'
import "../login.css";
import {Link} from "react-router-dom"
const login = () => {
  return (
    <div id="contenedor">
        
       <div id="central">
       <h1 classname="lead text-center">
                        Bienvenido
                    </h1>
                <div id="login">
                    
                    <form id="loginform">
                        <label htmlFor="usuario">Usuario
                        <input type="text" name="usuario" placeholder="Usuario" required/>
                        </label>
                        <label htmlFor="pasword">Contraseña
                        <input type="password" placeholder="Contraseña" name="password" required/>
                        </label>
                        
                        <button type="submit" title="Ingresar" name="Ingresar">Login</button>
                        <Link className="login button" to="/">volver</Link>
                    </form>
                    <div classname="pie-form">
                        
                        <Link className="login button" to="/">¿Perdiste tu contraseña?</Link>
                        <Link className="login button" to="/">¿No tienes Cuenta? Registrate</Link>
                       
                    </div>
                </div>
            
            </div>
    </div>
  )
}

export default login