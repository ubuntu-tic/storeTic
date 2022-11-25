import { Router } from "express";
import {
    AddProducto,
    obtener_producto,
    todos_productos,
    updateProducto,
    deleteProducto
} from "../controllers/products.controllers.js";

const productoRouter = Router();

productoRouter.get("/" , todos_productos);
productoRouter.get("/:_id", obtener_producto);
productoRouter.post("/" , AddProducto);
productoRouter.put("/:_id", updateProducto);
productoRouter.delete("/:_id", deleteProducto);

export default productoRouter;
