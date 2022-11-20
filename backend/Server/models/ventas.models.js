import mongoose from 'mongoose';

const Venta = mongoose.model('ventas', {

    fecha: { type: Date},
    "idCliente": { type: String},
    "valor": { type: Number},
    "confirmado": { type: Boolean},
    "detalleCompra": [
      {
        "idProducto": { type: String},
        "cantidad": { type: Number}
      }
    ]    
});

export default Venta;