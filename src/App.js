import React, { Component } from "react";
import "./App.css";
import AddProducto from "./components/AddProducto";
import CarritoCompras from "./components/CarritoCompras";
import MiComponente from "./components/MiComponente";
import Productos from "./components/Productos";
import ProductosAdmin from "./components/ProductosAdmin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index"


class App extends Component {
  render() {
    return (
      <div>
        
        <Router>
          <Routes>
          <Route path="components/AddProducto" element={<AddProducto/>}/>
          <Route path="components/ProductosAdmin" element={<ProductosAdmin/>}/>
          <Route path="components/MiComponente" element={<MiComponente/>}/>
          <Route path="components/CarritoCompras" element={<CarritoCompras/>}/>
          <Route path="components/Productos" element={<Productos/>}/>
          
          <Route path="/" element={<Index/>}/>
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
