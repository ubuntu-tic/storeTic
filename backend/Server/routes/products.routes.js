import { Router } from "express";
import {
    obtener_producto,
    todos_productos,
    updateProducto,
    deleteProducto
} from "../controllers/products.controllers.js";

const productoRouter = Router();

productoRouter.get("/" , todos_productos);
productoRouter.get("/:_id", obtener_producto);

export default productoRouter;
