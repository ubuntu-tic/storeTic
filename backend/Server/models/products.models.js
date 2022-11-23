import mongoose from 'mongoose';
import {model, Schema} from 'mongoose'
//const Producto = mongoose.model('productos', {
const ProductoSchema = new Schema({
        
        urlImagen: { type: String},
        nombre: { type: String},
        descripcion: { type: String},
        características: { type: String},
        precio: { type: Number},
        stock: { type: Number}

    }
);

export default model('producto', ProductoSchema);