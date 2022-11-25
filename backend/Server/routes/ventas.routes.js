import { Router } from "express";
import {
    obtener_venta,
    todas_ventas,
    ConfirmarCompra
} from "../controllers/ventas.controllers.js";

const ventaRouter = Router();

ventaRouter.get("/" , todas_ventas);
ventaRouter.get("/:_id", obtener_venta);
ventaRouter.post("/", ConfirmarCompra);

export default ventaRouter;
