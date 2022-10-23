import React, { Component } from "react";
import "./App.css";
import AddProducto from "./components/AddProducto";
import MiComponente from "./components/MiComponente";
import Navbar from "./components/NavBar";
import Productos from "./components/Productos";
import ProductosAdmin from "./components/ProductosAdmin";


class App extends Component {
  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          {/*<h1 className="lead text-center">Bienvenidos a Cleaning Storetic</h1>*/}
          <div>
            <Navbar />
          </div>
          <div>
            <MiComponente />
          </div>

          <div>
            <ProductosAdmin />
          </div>

          <div>
           
            <Productos />
          </div>

          <div>
            <AddProducto/>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
