import mongoose from 'mongoose';

const Usuario = mongoose.model('usuarios', {

 
                "identificación": {type: Number, required: true},
                "nombre": {type: String, required: true},
                "apellido": {type: String, required: true},
                "correo": {type: String, required: true},
                "edad": {type: String},
                "dirección": {type: String, required: false},
                "contraseña": {type: String, required: true},
                "rol": {type: String},
            }
);

export default Usuario;