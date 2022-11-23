import mongoose from 'mongoose';

const Producto = mongoose.model('productos', {
        urlImagen: { type: String},
        nombre: { type: String},
        descripcion: { type: String},
        características: { type: String},
        precio: { type: Number},
        stock: { type: Number}
    }
);

export default Producto;;