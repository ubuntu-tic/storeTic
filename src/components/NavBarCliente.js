import React, {Component} from "react";
import { Link } from "react-router-dom";

class NavbarCliente extends Component {
    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Cleaning StoreTic</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" to="../components/Productos">Catalogo de Productos 📒
                                <span className="visually-hidden">(current)</span>
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link active" to="../components/CarritoCompras">Carrito de Compras 🛒
                                <span className="visually-hidden">(current)</span>
                            </Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-sm-2" type="text" placeholder="Buscar 🔍"/>
                            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavbarCliente;

