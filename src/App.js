import React, { Component, useState } from "react";
import "./App.css";
import AddProducto from "./components/AddProducto";
import AddUsuario from "components/AddUsuario";
import CarritoCompras from "./components/CarritoCompras";
import Ventas from "./components/Ventas";
import Productos from "./components/Productos";
import ProductosAdmin from "./components/ProductosAdmin";
import UsuariosAdmin from "components/UsuariosAdmin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import  Register  from "pages/Register";
import Login from "pages/Login";





function App () {

    /*const productos = getProducts();
    if (!productos)
      localStorage.setItem('productos',JSON.stringify(jsonProductos));

      
    const ventas = localStorage.getItem('ventas')
    if (!ventas)
      localStorage.setItem('ventas',JSON.stringify([]));
*/
    return (
      <div>
        
      <Router>
        <Routes>
      
        <Route path="components/AddProducto" element={<AddProducto/>}/>
        <Route path="components/ProductosAdmin" element={<ProductosAdmin/>}/>
        <Route path="components/Ventas" element={<Ventas/>}/>
        <Route path="components/CarritoCompras" element={<CarritoCompras/>}/>
        <Route path="components/Productos" element={<Productos/>}/>
        <Route path="pages/Login" element={<Login/>}/>
        <Route path="pages/Register" element={<Register/>}/>
        <Route path="components/AddUsuario" element={<AddUsuario/>}/>
        <Route path="components/UsuariosAdmin" element={<UsuariosAdmin/>}/>
        <Route path="/" element={<Index/>}/>
        </Routes>
      </Router>
    </div>
    );
  }


export default App;
