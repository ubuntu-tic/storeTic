import mongoose from 'mongoose';

const Usuario = mongoose.model('usuarios', {

 
                "identificacion": {type: Number},
                "nombre": {type: String, required: true},
                "apellido": {type: String, required: true},
                "correo": {type: String, required: true},
                "edad": {type: Number},
                "dirección": {type: String},
                "telefono": {type: Number},
                "Admin": {type: Boolean},
            }
);

export default Usuario;