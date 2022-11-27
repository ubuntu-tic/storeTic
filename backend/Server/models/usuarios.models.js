import mongoose from 'mongoose';

const Usuario = mongoose.model('usuarios', {

 
                
                "nombre": {type: String, required: true},
                "apellido": {type: String, required: true},
                "correo": {type: String, required: true},
                "direccion": {type: String, required: true},
               
                "Admin": {type: Boolean},
            }
);

export default Usuario;