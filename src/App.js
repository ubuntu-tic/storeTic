import React, { Component, useState } from "react";
import "./App.css";
import AddProducto from "./components/AddProducto";
import CarritoCompras from "./components/CarritoCompras";
import MiComponente from "./components/MiComponente";
import Productos from "./components/Productos";
import ProductosAdmin from "./components/ProductosAdmin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index"
import jsonProductos from "./data/bdProductos";
import ProtectedRoute from "components/ProtectedRoute";


function App () {

  const [user, setUser] = useState(null)
  const login = () => {
    setUser({
      id: 1,
      name: "Duvan",
      rol: ["admin"]
    })
  }
  const logout = () => setUser (null)

   {
    const productos = localStorage.getItem('productos')
    if (!productos)
      localStorage.setItem('productos',JSON.stringify(jsonProductos));

    return (
      <div>
        
      <Router>
      {
          user ? (
              <button className="btn btn-secondary" onClick={logout}>LOGOUT</button>

          ): (
              <button className="btn btn-secondary" onClick={login}>LOGIN</button>
          )

      }
        <Routes>
        
        <Route path="components/AddProducto" element={<AddProducto/>}/>
        
        <Route element = {<ProtectedRoute isAllowed={!!user}/>}>
            <Route path="components/CarritoCompras" element={<CarritoCompras/>}/>
            <Route path="components/Productos" element={<Productos/>}/>
        </Route>
      

        <Route path="components/ProductosAdmin" element={
          <ProtectedRoute 
            isAllowed={!!user && user.rol.includes("admin")}> 
            <ProductosAdmin/>
        </ProtectedRoute>}
        />
        
        <Route path="components/Micomponente" element={
          <ProtectedRoute 
            isAllowed={!!user && user.rol.includes("admin")}> 
            <MiComponente/>
        </ProtectedRoute>}
        />
        <Route path="components/Productos" element={
          <ProtectedRoute 
            isAllowed={!!user && user.rol.includes("admin")}> 
            <Productos/>
        </ProtectedRoute>}
        />

        <Route path="/" element={<Index/>}/>
        </Routes>
      </Router>
    </div>
    );
  }
}

export default App;
