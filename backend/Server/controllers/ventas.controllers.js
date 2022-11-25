import Venta from "../models/ventas.models.js";

export function get_data(_id) {
    const query = Venta.find({_id : _id}).exec();
    return query;
}

//consultar venta por ID
export const obtener_venta = (req, res) => {
    try { 
        let response = get_data(req.params._id);
        response.then(function (_id) {
            if(!_id) {
                return res.status(404).json({message: 'venta no encontrada'});
            } else {
                return res.status(200).json(_id);
        }
    })

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({message: 'Error en el servidor'});
    }
}

//consultar todas las ventas
export const todas_ventas = async (req, res) => {
    try { 
        const ventas = await Venta.find();
        if (!ventas) {
            return res.status(404).json({message: 'No hay ventas'});
        } else {
            return res.send(ventas);
        }
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({message: 'Error en el servidor'});
    }
}

export const ConfirmarCompra = async (req, res) => {
    try { 
        const {idVenta, fecha, valor} = req.body;
        const newVenta = new Venta ({
            idVenta: idVenta,
            fecha: fecha,
            valor: valor
        })
        await newVenta.save();
        res.json({message: "venta creada"})
 

} catch (error) {
    console.log("ERRORRRRR")
    console.log(error.message);
    return res.status(500).json({message: 'Error en el servidor'});
}
    
}

