import { response } from "express";
import Producto from "../models/products.models.js";

export function get_data(_id) {
    const query = Producto.find({_id : _id}).exec();
    return query;
}

//consultar producto por ID
export const obtener_producto = (req, res) => {
    try { 
        let response = get_data(req.params._id);
        response.then(function (_id) {
            if(!_id) {
                return res.status(404).json({message: 'Producto no encontrado'});
            } else {
                return res.status(200).json(_id);
        }
    })

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({message: 'Error en el servidor'});
    }
}

//consultar todos los productos
export const todos_productos = async (req, res) => {
    try { 
        const productos = await Producto.find();
        if (!productos) {
            return res.status(404).json({message: 'No hay productos'});
        } else {
            return res.send(productos);
        }
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({message: 'Error en el servidor'});
    }
}


export const AddProducto = async (req, res) => {
    try { 
        const {urlImagen, nombre, descripcion, características, precio, stock} = req.body;
        const newProducto = new Producto ({
            urlImagen: urlImagen,
            nombre: nombre,
            descripcion: descripcion,
            características: características,
            precio: precio,
            stock: stock
})
        await newProducto.save();
        res.json({message: "producto creado"})
 

} catch (error) {
    console.log(error.message);
    return res.status(500).json({message: 'Error en el servidor'});
}
    
}


export const deleteProducto = async (req, res) => {
    try {
        const producto = await Producto.findByIdAndRemove(req.params._id);
        if (!producto) {
            return res.status(404).json({message: 'Producto no encontrado'});
        } else {
            return res.status(200).json({message: 'Producto eliminado'});
        }
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({message: 'Error en el servidor'});
    }
}



export const updateProducto = async (req, res) => {
    try{
        const {urlImagen, nombre, descripcion, características, precio, stock} = req.body;
        const newProducto = {urlImagen, nombre, descripcion, características, precio, stock};
        const producto = await Producto.findByIdAndUpdate(req.params._id, newProducto, {new: true});
        if (!producto) {
            return res.status(404).json({message: 'Producto no encontrado'});
        } else {
            return res.status(200).json({message: 'Producto actualizado'});
        }
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({message: 'Error en el servidor'});
    }
}
