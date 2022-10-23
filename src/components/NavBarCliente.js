import React, {Component} from "react";

class NavbarCliente extends Component {
    render() { 
        return ( 
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Cleaning StoreTic</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarColor02">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item">
                            <a class="nav-link active" href="/listaproductos_clientes">Lista de Productos
                                <span class="visually-hidden">(current)</span>
                            </a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="/carrito_clientes">Carrito de Compras</a>
                            </li>
                           
                           
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-sm-2" type="text" placeholder="Buscar" img="" />
                            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavbarCliente;

