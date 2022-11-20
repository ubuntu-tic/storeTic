import mongoose from 'mongoose';

const Usuario = mongoose.model('usuarios', {

 
                "identificacion": {type: Number, required: true},
                "nombre": {type: String, required: true},
                "apellido": {type: String, required: true},
                "correo": {type: String, required: true},
                "edad": {type: String},
                "dirección": {
                "calle": {type: String},
                "ciudad": {type: String},
                
                },
                "telefono": [
                  {
                    "tipo": {type: String},
                    "numero": {type: Number}
                  },
                  {
                    "tipo": {type: String},
                    "numero": {type: Number}
                  }
                ],
                "rol": {type: Boolean},
            }
);

export default Usuario;