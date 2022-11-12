import React, { useState, useEffect } from 'react'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'

const CrudApp = () => {

    const [editData, setEditData] = useState(null);
    const [productos, setProductos] = useState(() => {
        const saveProductos = localStorage.getItem('productosData');
        if (saveProductos) {
            return JSON.parse(saveProductos);
        } else {
            return [];
        }
    });

    useEffect(() => {
        window.localStorage.setItem('productosData', JSON.stringify(productos));
    }, [productos]);

    const addProducto = (producto) => {
        setProductos([...productos, producto]);
    }

    const editProducto = (producto) => {
        const newProducto = productos.map((item) => item.id === producto.id ? producto : item);
        setProductos(newProducto);
        setEditData(null);
    }

    const deleteProducto = (id) => {
        const isDelete = window.confirm(`¿Estás seguro de eliminar el producto con id ${id}?`);
        if (isDelete) {
            const newProducto = productos.filter((item) => item.id !== id);
            setProductos(newProducto);
        }
    }

    return (
        <div>
            <h2>CRUD App</h2>
            <CrudForm addProducto={addProducto} editProducto={editProducto} editData={editData} setEditData={setEditData} />
            <CrudTable productos={productos} setEditData={setEditData} deleteProducto={deleteProducto} />
        </div>
    )
}

export default CrudApp