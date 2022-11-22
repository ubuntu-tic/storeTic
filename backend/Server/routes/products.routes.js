import { Router } from "express";
import {
    AddProducto,
    obtener_producto,
    todos_productos,
} from "../controllers/products.controllers.js";

const productoRouter = Router();

productoRouter.get("/" , todos_productos);
productoRouter.get("/:_id", obtener_producto);
productoRouter.post("/agregar", AddProducto)

export default productoRouter;
