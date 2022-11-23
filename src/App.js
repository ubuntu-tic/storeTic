import React, { Component, useState } from "react";
import "./App.css";
import AddProducto from "./components/AddProducto";
import CarritoCompras from "./components/CarritoCompras";
import Ventas from "./components/Ventas";
import Productos from "./components/Productos";
import ProductosAdmin from "./components/ProductosAdmin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index"
import jsonProductos from "./data/bdProductos";
import Login from "pages/Login";
import  Register  from "pages/Register";



function App () {


   {
  /*  const productos = localStorage.getItem('productos')
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
        <Route path="components/MiComponente" element={<Ventas/>}/>
        <Route path="components/CarritoCompras" element={<CarritoCompras/>}/>
        <Route path="components/Productos" element={<Productos/>}/>
        <Route path="pages/Login" element={<Login/>}/>
        <Route path="pages/Register" element={<Register/>}/>
        
        <Route path="/" element={<Index/>}/>
        </Routes>
      </Router>
    </div>
    );
  }
}

export default App;
