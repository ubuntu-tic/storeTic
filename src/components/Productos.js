//import jsonProductos from "../data/bdProductos";
import { getProducts } from "api/productos";
import React, { useEffect, useState } from "react";
import NavbarCliente from "./NavBarCliente";

const Productos = () => {
  const [productos, setProductos] = useState();
  const [cantidad, setCantidad] = useState();
  const localCarrito = localStorage.getItem("carrito");

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProductos(data);
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const [carrito, setCarrito] = useState(JSON.parse(localCarrito));

  const agregarCarrito = function (item) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    let tempProductos = productos && productos;
    setProductos(tempProductos);

    if (carrito && carrito[item._id]) {
      item.stock = item.stock - cantidad;
      setCarrito({
        ...carrito,
        [item._id]: item,
      });
    } else {
      item.stock = item.stock - cantidad;
      setCarrito({ ...carrito, [item._id]: item });
    }

    let hayStock = item.stock >= 0;
    if (hayStock) {
    }
    // tempProductos.forEach((item,pos) => {
    //   if (item.id == event.target.idprod.value)
    //     if (tempProductos[pos].stock >= parseInt(event.target.cantidad.value)) {
    //       tempProductos[pos].stock -= parseInt(event.target.cantidad.value)
    //       hayStock = true;
    //     }
    // })
    // if (hayStock) {
    //   localStorage.setItem('productos',JSON.stringify(tempProductos));
    //   console.log("Antes: ",tempProductos);
    //   setProductos(tempProductos)

    //   setCarrito(carritoActual);
    // if(carrito && carrito[event.target.idprod.value]) {
    //   // setCarrito({...carrito,[event.target.idprod.value]:parseInt(carrito[event.target.idprod.value]) + parseInt(event.target.cantidad.value)})
    // } else {
    //   // setCarrito({...carrito,[event.target.idprod.value]:parseInt(event.target.cantidad.value)})
    // }

    // document.getElementById("cantidad_"+event.target.idprod.value).value = ""
    // } else {
    //   alert("No hay ha indicado una cantidad valida para este articulo");
    // }
  };

  useEffect(() => {
    console.log(carrito);
    localStorage.setItem("carrito", JSON.stringify(carrito));
  });

  return (
    <div>
      <NavbarCliente />

      <div className="row  row-cols-md-5 g-0">
        {productos &&
          productos.map((item, pos) => (
            <div className="row  row-cols-md-1 g-0">
              <div className="card" key={pos}>
                <div className="card-body">
                  <img
                    src={item.urlImagen}
                    width="100"
                    className="card-img-top"
                    alt={item.nombre}
                  />
                  <h5 className="card-title">Nombre: {item.nombre}</h5>
                  <p className="card-text">Descripcion: {item.descripcion}</p>
                  <p className="card-text">
                    Caracteristicas: {item.características}
                  </p>
                  <p className="card-text">Valor: $ {item.precio}</p>
                </div>
                <div className="card-footer">
                  <label htmlFor="cantidad" className="form-label">
                    Cantidad
                  </label>
                  <div className="inp_cantidad">
                    <input
                      name="cantidad"
                      type="number"
                      id={"cantidad_" + item._id}
                      placeholder="0"
                      className="card-cantidad"
                      onChange={(e) => setCantidad(e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={() => agregarCarrito(item)}
                      className="btn btn-success m-2"
                    >
                      Agregar ✅
                    </button>
                    <input type="hidden" name="idprod" value={item.id} />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Productos;
