import { Router } from "express";
import {
    obtener_venta,
    todas_ventas,
} from "../controllers/ventas.controllers.js";

const ventaRouter = Router();

ventaRouter.get("/" , todas_ventas);
ventaRouter.get("/:_id", obtener_venta);

export default ventaRouter;
