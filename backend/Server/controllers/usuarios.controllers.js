import Usuario from "../models/usuarios.models.js";

export function get_data(_id) {
    const query = Usuario.find({_id : _id}).exec();
    return query;
}

//consultar usuario por ID
export const obtener_usuario = (req, res) => {
    try { 
        let response = get_data(req.params._id);
        response.then(function (_id) {
            if(!_id) {
                return res.status(404).json({message: 'Usuario no encontrado'});
            } else {
                return res.status(200).json(_id);
        }
    })

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({message: 'Error en el servidor'});
    }
}

//consultar todos los usuarios
export const todos_usuarios = async (req, res) => {
    try { 
        const usuarios = await Usuario.find();
        if (!usuarios) {
            return res.status(404).json({message: 'No hay usuarios'});
        } else {
            return res.send(usuarios);
        }
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({message: 'Error en el servidor'});
    }
}